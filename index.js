const express = require('express'), http = require('http'), fs = require("fs"), discord = require("discord.js"), passwordHash = require('password-hash'), nodemailer = require('nodemailer'), url = require('url'), fetch = require('node-fetch');
const { spawn } = require('child_process');
console.log("Starting ...");
var app = express();
var port = process.env.PORT || 8080;
var server = app.listen(port, () => {
  console.log("Server listening at http://localhost:" + port)
});
var io = require('socket.io')(server);
// Web
app.use(express.static(__dirname + '/client'));
app.get('/redirect', function(req, res){
    const urlObj = url.parse(req.url, true);
    if (urlObj.query.code) {
    	const accessCode = urlObj.query.code;
        const data = {
        	client_id: config.client_id,
        	client_secret: config.client_secret,
        	grant_type: 'authorization_code',
        	redirect_uri: "http://localhost:8080/redirect/",
        	code: accessCode,
        	scope: 'identify%20email',
        };
        fetch('https://discord.com/api/oauth2/token', {
        	method: 'POST',
        	body: new URLSearchParams(data),
        	headers: {
        		'Content-Type': 'application/x-www-form-urlencoded',
        	},
        }).then(res => res.json()).then(info => fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${info.token_type} ${info.access_token}`,
                },
            }).then(res => res.json()).then(info => {
                if (info.message){
                    console.error(info.message);
                    res.end("<script>document.location.href='/';</script>");
                } else {
                    if (!(info.id in users)) {
                        users[info.id] = {
                            username: info.username,
                            tutorial: false,
                            projects: {},
                        };
                        fs.writeFileSync('./users.json', JSON.stringify(users));
                    }else {
                        users[info.id].username = info.username;
                    }
                    res.end("<script>document.cookie='id=" + passwordHash.generate(info.id) + ";path=/';document.location.href='/';</script>");
                }
            }));
    }else {
        res.end("<script>document.location.href='/';</script>");
    }
});
console.log("Read JSON files ...");

if (!fs.existsSync("users.json")) {
    fs.writeFileSync("users.json", "{}");
}
if (!fs.existsSync("config.json")) {
    console.error("Please create config.json file config.json.exemple is an exemple");
}
if (!fs.existsSync("./userfiles")) {
    fs.mkdirSync("./userfiles");
}
var users = JSON.parse(fs.readFileSync("users.json"));
var config = JSON.parse(fs.readFileSync("config.json"));
var socketIDs = {};
// Mails
var transport = nodemailer.createTransport({
    host: config.smtp,
    port: 465,
    secure: true,
    auth: {
        user: config.email,
        pass: config.password
    },
    tls: {
        rejectUnauthorized: false
    }
});
transport.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Mail Server is ready");
    }
});
var commands = {};
function getUntitledName(projects) {
    var projectName = "";
    while (projectName === "") {
        var tempName = 0;
        var exist = false;
        for (key in projects) {
            if (key === "Untitled" + (tempName || "")) {
                tempName ++;
                exist = true;
            }
        }
        if (exist === false) {
            projectName = "Untitled" + (tempName || "");
        }
    }
    return projectName;
}
// Socket.io
io.on('connection', function (socket) {
    console.log("Un client c'est connecté !");
    socket.on('play', function(filename) {
        if (!commands[filename]) {
            console.log("Une commande à été démmarer !");
            commands[filename] = spawn('node', ["userfiles/" + filename + ".js"]);
            commands[filename].stdout.on('data', (data) => {
                socket.emit("stdout", data.toString(), socket.id);
            });
            commands[filename].stderr.on('data', function(data){
                socket.emit("stderr", data.toString(), socket.id);
            });
            commands[filename].stdin.on('data', function(data){
                socket.emit("stdin", data.toString(), socket.id);
            });
            commands[filename].on('close', (code) => {
                commands[filename] = null;
                socket.emit("stop", code, socket.id);
                console.log("Une commande à été arreter !");
            });
            socket.emit("start");
        }else {
            commands[filename].stdin.pause();
            commands[filename].kill();
        }
    });
    socket.on('updateCode', function(filename, code, projectName, xml) {
        if (socket.id in socketIDs) {
            if (projectName in users[socketIDs[socket.id]].projects) {
                if (!commands[filename]) {
                    fs.writeFileSync("userfiles/" + filename + ".js", code);
                }
                users[socketIDs[socket.id]].projects[projectName].xml = xml;
                fs.writeFileSync('./users.json', JSON.stringify(users));
            }
        }
    });
    socket.on('commandExist', function(filename) {
        if (socket.id in socketIDs) {
            if (commands[filename]) {
                socket.emit("commandExist", true, socket.id);
            }else {
                socket.emit("commandExist", false, socket.id);
            }
        }
    });
    socket.on('cookie', function(hashedID) {
        for (var userID in users) {
            if (passwordHash.verify(userID, hashedID)) {
                socketIDs[socket.id] = userID;
                socket.emit("cookieSucces", users[userID].username, users[userID].tutorial, socket.id);
            }
        }
    });
    socket.on('projects', function() {
        if (socket.id in socketIDs) {
            socket.emit("projects", users[socketIDs[socket.id]].projects, socket.id);
        }
    });
    socket.on('deleteProject', function (projectName) {
        if (socket.id in socketIDs) {
            if (fs.existsSync("userfiles/" + users[socketIDs[socket.id]].projects[projectName].path + ".js")) {
                fs.unlinkSync("userfiles/" + users[socketIDs[socket.id]].projects[projectName].path + ".js");
            }
            delete users[socketIDs[socket.id]].projects[projectName];
            fs.writeFileSync('./users.json', JSON.stringify(users));
            socket.emit("projects", users[socketIDs[socket.id]].projects, socket.id);
        }
    });
    socket.on('duplicateProject', function (projectName) {
        if (socket.id in socketIDs) {
            users[socketIDs[socket.id]].projects[projectName + " Copy"] = users[socketIDs[socket.id]].projects[projectName];
            fs.writeFileSync('./users.json', JSON.stringify(users));
            socket.emit("projects", users[socketIDs[socket.id]].projects, socket.id);
        }
    });
    socket.on('disableTutorial', function () {
        if (socket.id in socketIDs) {
            users[socketIDs[socket.id]].tutorial = false;
            fs.writeFileSync('./users.json', JSON.stringify(users));
        }
    });
    socket.on('getProject', function (projectName) {
        if (socket.id in socketIDs) {
            if (projectName in users[socketIDs[socket.id]].projects) {
                socket.emit("project", projectName, users[socketIDs[socket.id]].projects[projectName], socket.id);
            }else {
                var path = socketIDs[socket.id] + projectName.toLowerCase().split(" ").join("_").split(".").join("").split("/").join("");
                users[socketIDs[socket.id]].projects[projectName] = {
                    xml: '<xml><block type="discord_token" deletable="false" movable="false"><field name="TEXT">token</field></block><block type="event_on" id="h0$AV2pq84-nP;=z49~P" x="0" y="96"><value name="ACTION"><shadow type="event_on_menu" id="Z|4X@}#cKvPPf4kz~:l)"><field name="ACTION">ready</field></shadow></value><statement name="DO"><block type="sensing_log" id="^Hbrdm97i9]$/SJ@K:F8"><value name="TEXT"><shadow type="text" id="^jxJW~)+]xnB#+UtlQy*"><field name="TEXT">Bot is online !</field></shadow></value></block></statement></block><block type="event_on" id=":Rd+teh^G@KsewvDIxwD" x="0" y="272"><value name="ACTION"><shadow type="event_on_menu" id="fd_k+_6fGiEQfNAcXG/)"><field name="ACTION">message</field></shadow></value><statement name="DO"><block type="control_if" id=")XmGcc6]At{uGvs%7`=s"><value name="CONDITION"><block type="operator_startswith" id="VoaA9kyY=yq4mqyBkoIr"><value name="STRING1"><shadow type="text" id="3aK~d81kQ8f}0U/PZXPL"><field name="TEXT">hello world !</field></shadow><block type="event_on_message_content" id="7HW8[+$@#]gE{:7c;((n"></block></value><value name="STRING2"><shadow type="text" id="~HVIZDaP}7iuJ-J;pqoh"><field name="TEXT">!ping</field></shadow></value></block></value><statement name="SUBSTACK"><block type="event_reply" id="1t=K?nqBO{iQ#C3tz/e["><value name="TEXT"><shadow type="text" id="2UOm-;]*c~@oa[hXn_mW"><field name="TEXT">pong !</field></shadow></value></block></statement></block></statement></block></xml>',
                    path: path
                };
                socket.emit("project", projectName, users[socketIDs[socket.id]].projects[projectName], socket.id);
                fs.writeFileSync('./users.json', JSON.stringify(users));
            }
        }
    });
    socket.on('untitledProject', function () {
        if (socket.id in socketIDs) {
            var projectName = getUntitledName(users[socketIDs[socket.id]].projects);
            if (projectName in users[socketIDs[socket.id]].projects) {
                socket.emit("project", projectName, users[socketIDs[socket.id]].projects[projectName], socket.id);
            }else {
                var path = socketIDs[socket.id] + projectName.toLowerCase().split(" ").join("_").split(".").join("").split("/").join("");
                users[socketIDs[socket.id]].projects[projectName] = {
                    xml: '<xml><block type="discord_token" deletable="false" movable="false"><field name="TEXT">token</field></block><block type="event_on" id="h0$AV2pq84-nP;=z49~P" x="0" y="96"><value name="ACTION"><shadow type="event_on_menu" id="Z|4X@}#cKvPPf4kz~:l)"><field name="ACTION">ready</field></shadow></value><statement name="DO"><block type="sensing_log" id="^Hbrdm97i9]$/SJ@K:F8"><value name="TEXT"><shadow type="text" id="^jxJW~)+]xnB#+UtlQy*"><field name="TEXT">Bot is online !</field></shadow></value></block></statement></block><block type="event_on" id=":Rd+teh^G@KsewvDIxwD" x="0" y="272"><value name="ACTION"><shadow type="event_on_menu" id="fd_k+_6fGiEQfNAcXG/)"><field name="ACTION">message</field></shadow></value><statement name="DO"><block type="control_if" id=")XmGcc6]At{uGvs%7`=s"><value name="CONDITION"><block type="operator_startswith" id="VoaA9kyY=yq4mqyBkoIr"><value name="STRING1"><shadow type="text" id="3aK~d81kQ8f}0U/PZXPL"><field name="TEXT">hello world !</field></shadow><block type="event_on_message_content" id="7HW8[+$@#]gE{:7c;((n"></block></value><value name="STRING2"><shadow type="text" id="~HVIZDaP}7iuJ-J;pqoh"><field name="TEXT">!ping</field></shadow></value></block></value><statement name="SUBSTACK"><block type="event_reply" id="1t=K?nqBO{iQ#C3tz/e["><value name="TEXT"><shadow type="text" id="2UOm-;]*c~@oa[hXn_mW"><field name="TEXT">pong !</field></shadow></value></block></statement></block></statement></block></xml>',
                    path: path
                };
                socket.emit("project", projectName, users[socketIDs[socket.id]].projects[projectName], socket.id);
                fs.writeFileSync('./users.json', JSON.stringify(users));
            }
        }
    });
    socket.on('updateName', function (oldName, newName) {
        if (socket.id in socketIDs) {
            if (oldName in users[socketIDs[socket.id]].projects) {
                users[socketIDs[socket.id]].projects[newName] = users[socketIDs[socket.id]].projects[oldName];
                delete users[socketIDs[socket.id]].projects[oldName];
                fs.writeFileSync('./users.json', JSON.stringify(users));
            }
        }
    });
    socket.on('disconnect', function() {
        console.log("Un client c'est déconnecté !");
    });
});
