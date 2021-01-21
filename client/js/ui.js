var connected = false;
var tutorial = true;
var projectPath = "";
var projectName = "";
var href = "";
socket.on("href", function(redirect_uri, client_id) {
    href = "https://discord.com/api/oauth2/authorize?client_id=" + client_id + "&redirect_uri=" + redirect_uri + "&response_type=code&scope=identify%20email"
    var buttons = document.getElementsByClassName("login-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('onclick',"document.location.href = '" + href + "'");
    }
    document.getElementById("save-link").setAttribute('href',"document.location.href = '" + href + "'");
});
for(var i = 0; i < decodeURIComponent(document.cookie).split(';').length; i++) {
    var c = decodeURIComponent(document.cookie).split(';')[i];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf("id=") == 0) {
        socket.emit("cookie", c.substring(name.length, c.length).slice(3));
    }
}
socket.on('cookieSucces', function(username, tuto, socketID){
    if (socketID === socket.id) {
        document.getElementById("logout-button").style.display = "inline-block";
        document.getElementById("name-input").style.display = "inline-block";
        connected = true;
        var buttons = document.getElementsByClassName("login-button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = username;
            buttons[i].setAttribute('onclick',"document.location.href = '/account'");
        }
        tutorial = tuto;
        if (tuto === false) {
            document.getElementById("tutorial1").style.display = "none";
        }
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name');
        if (name !== "" && name !== null) {
            socket.emit("getProject", name);
        }else{
            socket.emit("untitledProject");
        }
    }
});
function logout() {
    document.cookie = "id=;path=/";
    document.location.href = "/";
}
function play() {
    if (tutorial) {
        document.getElementById("tutorial2").style.display = 'block';
        tutorial = false;
    }
    if (connected) {
        socket.emit("play", projectPath);
    } else {
        document.getElementById("save-div").style.display = 'block';
    }
}
socket.on("stdout", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("console-content").innerHTML += data.replace("\n", "<br>") + "<br>";
        scroll();
    }
});
socket.on("stderr", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("console-content").innerHTML += data.replace("\n", "<br>") + "<br>";
        scroll();
    }
});
socket.on("stdin", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("console-content").innerHTML += data.replace("\n", "<br>") + "<br>";
        scroll();
    }
});
socket.on("start", function(socketID){
    if (socketID === socket.id) {
        document.getElementById("play").innerHTML = '<img src="/assets/images/stop.svg" alt="Stop">';
        document.getElementById("console-content").innerHTML += "node .<br>";
        scroll();
    }
});
socket.on("stop", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("play").innerHTML = '<img src="/assets/images/play.svg" alt="Stop">';
        document.getElementById("console-content").innerHTML += "End of program with exit code: " + data + "<br>/test> ";
        scroll();
    }
});
function scroll() {
    document.getElementById("console").scrollTo(0, document.getElementById("console-content").scrollWidth);
}
setTimeout(function () {
    if (!connected) {
        document.getElementById("save-div").style.display = 'block';
    }
}, 60000);
socket.on('project', function(name, project, exist, socketID){
    if (socketID === socket.id) {
        projectPath = project.path;
        projectName = name;
        document.getElementById("name-input").value = name;
        workspace.clear();
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(project.xml), workspace);
        if (exist) {
            document.getElementById("play").innerHTML = '<img src="/assets/images/stop.svg" alt="Stop">';
            document.getElementById("console-content").innerHTML = "";
        }else {
            document.getElementById("play").innerHTML = '<img src="/assets/images/play.svg" alt="Play">';
        }
    }
});
function updateName() {
    socket.emit("updateName", projectName, document.getElementById("name-input").value);
    projectName = document.getElementById("name-input").value;
}
