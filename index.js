const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require("passport-discord.js").Strategy;
const chalk = require("chalk");
const fs = require("fs");
const { spawn } = require('child_process');

// ######## JSON ########
if (!fs.existsSync("users.json")) {
    fs.writeFileSync("users.json", "{}");
}
if (!fs.existsSync("config.json")) {
    throw "Please create config.json file config.json.exemple is an exemple";
}
if (!fs.existsSync("./userfiles")) {
    fs.mkdirSync("./userfiles");
}
var users = JSON.parse(fs.readFileSync("users.json"));
var config = JSON.parse(fs.readFileSync("config.json"));
var defaultXML = `<xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="discord_token" id="f^}(kcWM:P]0Ki-7PH,4" deletable="false" movable="false" x="0" y="0">
        <field name="TEXT">token</field>
    </block>
    <block type="event_on" id="h0$AV2pq84-nP;=z49~P" x="0" y="96">
        <field name="ACTION">ready</field>
        <statement name="DO">
            <block type="sensing_log" id="^Hbrdm97i9]$/SJ@K:F8">
                <value name="TEXT">
                    <shadow type="text" id="^jxJW~)+]xnB#+UtlQy*">
                        <field name="TEXT">Bot is online !</field>
                    </shadow>
                </value>
            </block>
        </statement>
    </block>
    <block type="event_on" id=":Rd+teh^G@KsewvDIxwD" x="0" y="272">
        <field name="ACTION">message</field>
        <statement name="DO">
            <block type="control_if" id=")XmGcc6]At{uGvs%7=s">
                <value name="CONDITION">
                    <block type="operator_startswith" id="VoaA9kyY=yq4mqyBkoIr">
                        <value name="STRING1">
                            <shadow xmlns="" type="text" id="3aK~d81kQ8f}0U/PZXPL">
                                <field name="TEXT">hello world !</field>
                            </shadow>
                            <block type="message_content" id="ExL;Bf!|#wZ4J|QK;X0Q">
                                <value name="MESSAGE">
                                    <block type="event_variables" id="q]{Tkhs;k?~pfEna%cUT">
                                        <field name="VARIABLE">message</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <value name="STRING2">
                            <shadow type="text" id="~HVIZDaP}7iuJ-J;pqoh">
                                <field name="TEXT">!ping</field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <statement name="SUBSTACK">
                    <block type="message_reply" id="1t=K?nqBO{iQ#C3tz/e[">
                        <value name="TEXT">
                            <shadow type="text" id="2UOm-;]*c~@oa[hXn_mW">
                                <field name="TEXT">pong !</field>
                            </shadow>
                        </value>
                        <value name="MESSAGE">
                            <block type="event_variables" id="etv#Xb68BMy*uHMb/aMd">
                                <field name="VARIABLE">message</field>
                            </block>
                        </value>
                    </block>
                </statement>
            </block>
        </statement>
    </block>
</xml>`;
var commands = {};

var app = express();
var port = process.env.PORT || 8080;
var server = app.listen(port, () => {
    console.log(`${chalk.blue("[INFO]")} Server listening at http://localhost:${port}`);
});
var io = require('socket.io')(server);
var sessionMiddleware = session({
    secret: 'discordscratch',
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        secure: false
    },
});
io.use(function (socket, next) {
    sessionMiddleware(socket.request, socket.request.res || {}, next);
});
app.use(sessionMiddleware);
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (u, d) {
    d(null, u);
});
passport.deserializeUser(function (u, d) {
    d(null, u);
});
// ######## Discord OAuth2 #######
passport.use(new DiscordStrategy({
    clientID: config.client_id,
    clientSecret: config.client_secret,
    callbackURL: config.redirect_uri,
    scope: ["identify", "email"]
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
// ######## Web ########
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    if (req.session.user) {
        res.render('pages/main', { connected: true, username: req.session.user.username, email: req.session.user.email, discord_token: req.session.user.accessToken });
    } else {
        res.render('pages/main', { connected: false });
    }
});
app.get("/redirect", passport.authenticate("discord.js", { failureRedirect: "/login" }), function (req, res) {
    var user = req.session.passport.user;
    if (!(user.id in users)) {
        users[user.id] = {
            tutorial: true,
            projects: {},
            username: user.username,
            email: user.email,
            discriminator: user.discriminator,
            avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
        };
    } else {
        users[user.id].email = user.email;
        users[user.id].username = user.username;
        users[user.id].discriminator = user.discriminator;
        users[user.id].avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    }
    fs.writeFileSync('./users.json', JSON.stringify(users));
    req.session.user = {
        id: user.id,
        username: user.username,
    };
    console.log(`${chalk.blue("[INFO]")} L'utilisateur ${req.session.passport.user.username}#${req.session.passport.user.discriminator} vient de se connecter sur le site !`);
    res.redirect('/');
});
app.get("/login", passport.authenticate("discord.js"));
app.get("/logout", (req, res) => {
    req.session.user = req.session.destroy();
    res.redirect('/');
});
app.get('/account', function (req, res) {
    if (req.session.user) {
        res.render('pages/account', { connected: true, username: req.session.user.username, projects: users[req.session.user.id].projects });
    } else {
        res.redirect("/login");
    }
});
app.get('/simple_editor', function (req, res) {
    if (req.session.user) {
        var projectName = "";
        if (req.query.name) {
            projectName = req.query.name;
        } else {
            projectName = getUntitledName(users[req.session.user.id].projects);
        }
        if (!(projectName in users[req.session.user.id].projects)) {
            var path = req.session.user.id + projectName.toLowerCase().split(" ").join("_").split(".").join("").split("/").join("");
            users[req.session.user.id].projects[projectName] = {
                xml: defaultXML,
                path: path
            };
            fs.writeFileSync('./users.json', JSON.stringify(users));
        }
        users[req.session.user.id].projects[projectName].xml = users[req.session.user.id].projects[projectName].xml.split("`").join("");
        res.render('pages/simple_editor', {
            connected: true,
            username: req.session.user.username,
            tutorial: users[req.session.user.id].tutorial,
            project: users[req.session.user.id].projects[projectName],
            projectName: projectName,
            exist: commands[users[req.session.user.id].projects[projectName].path] || false,
        });
    } else {
        res.render('pages/simple_editor', {
            connected: false,
            tutorial: true,
            project: {
                xml: defaultXML,
                path: ""
            },
            projectName: "Untitled",
            exist: false,
        });
    }
});
app.get('/advanced_editor', function (req, res) {
    if (req.session.user) {
        var projectName = "";
        if (req.query.name) {
            projectName = req.query.name;
        }else{
            projectName = getUntitledName(users[req.session.user.id].projects);
        }
        if (!(projectName in users[req.session.user.id].projects)) {
            var path = req.session.user.id + projectName.toLowerCase().split(" ").join("_").split(".").join("").split("/").join("");
            users[req.session.user.id].projects[projectName] = {
                xml: defaultXML,
                path: path
            };
            fs.writeFileSync('./users.json', JSON.stringify(users));
        }
        users[req.session.user.id].projects[projectName].xml = users[req.session.user.id].projects[projectName].xml.split("`").join("");
        res.render('pages/advanced_editor', {
            connected: true,
            username: req.session.user.username,
            tutorial: users[req.session.user.id].tutorial,
            project: users[req.session.user.id].projects[projectName],
            projectName: projectName,
            exist: commands[users[req.session.user.id].projects[projectName].path] || false,
        });
    } else {
        res.render('pages/advanced_editor', {
            connected: false,
            tutorial: true,
            project: {
                xml: defaultXML,
                path: ""
            },
            projectName: "Untitled",
            exist: false,
        });
    }
});
app.get('/wiki', function (req, res) {
    if (req.session.user) {
        res.render('pages/wiki', { connected: true, username: req.session.user.username });
    } else {
        res.render('pages/wiki', { connected: false });
    }
});
function getUntitledName(projects) {
    var projectName = "Untitled";
    var tempName = 0;
    while (projectName === "Untitled") {
        var exist = false;
        for (key in projects) {
            if (key === "Untitled" + tempName) {
                tempName ++;
                exist = true;
            }
        }
        if (exist === false) {
            projectName = "Untitled" + tempName;
            break;
        }
    }
    return projectName;
}
// Socket.io
io.on('connection', function (socket) {
    console.log(`${chalk.blue("[INFO]")} Un client c'est connecté !`);
    socket.on('play', function(filename) {
        if (!commands[filename]) {
            console.log(`${chalk.blue("[INFO]")} Une commande à été démmarer !`);
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
                console.log(`${chalk.blue("[INFO]")} Une commande à été arreter !`);
            });
            socket.emit("start", socket.id);
        }else {
            commands[filename].stdin.pause();
            commands[filename].kill();
        }
    });
    socket.on('updateCode', function (filename, code, projectName, xml) {
        if (socket.request.session.user) {
            if (projectName in users[socket.request.session.user.id].projects) {
                if (!commands[filename]) {
                    fs.writeFileSync("userfiles/" + filename + ".js", code);
                }
                users[socket.request.session.user.id].projects[projectName].xml = xml;
                fs.writeFileSync('./users.json', JSON.stringify(users));
            }
        }
    });
    socket.on('deleteProject', function (projectName) {
        if (socket.request.session.user) {
            if (fs.existsSync("userfiles/" + users[socket.request.session.user.id].projects[projectName].path + ".js")) {
                fs.unlinkSync("userfiles/" + users[socket.request.session.user.id].projects[projectName].path + ".js");
            }
            delete users[socket.request.session.user.id].projects[projectName];
            fs.writeFileSync('./users.json', JSON.stringify(users));
            socket.emit("projects", users[socket.request.session.user.id].projects, socket.id);
        }
    });
    socket.on('duplicateProject', function (projectName) {
        if (socket.request.session.user) {
            users[socket.request.session.user.id].projects[projectName + " Copy"] = users[socket.request.session.user.id].projects[projectName];
            fs.writeFileSync('./users.json', JSON.stringify(users));
            socket.emit("projects", users[socket.request.session.user.id].projects, socket.id);
        }
    });
    socket.on('disableTutorial', function () {
        if (socket.request.session.user) {
            users[socket.request.session.user.id].tutorial = false;
            fs.writeFileSync('./users.json', JSON.stringify(users));
        }
    });
    socket.on('updateName', function (oldName, newName) {
        if (socket.request.session.user) {
            if (oldName in users[socket.request.session.user.id].projects) {
                users[socket.request.session.user.id].projects[newName] = users[socket.request.session.user.id].projects[oldName];
                delete socket.request.session.user.projects[oldName];
                fs.writeFileSync('./users.json', JSON.stringify(users));
            }
        }
    });
    socket.on('disconnect', function() {
        console.log(`${chalk.blue("[INFO]")} Un client c'est déconnecté !`);
    });
});
