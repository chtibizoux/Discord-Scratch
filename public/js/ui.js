function play() {
    if (tutorial2) {
        document.getElementById("tutorial2").style.display = 'block';
        tutorial2 = false;
    }
    if (connected) {
        socket.emit("play", projectId);
    } else {
        document.getElementById("save-div").style.display = 'block';
    }
}
socket.on("stdout", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("console-content").innerHTML += data.replace("\n", "<br>");
        scroll();
    }
});
socket.on("stderr", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("console-content").innerHTML += data.replace("\n", "<br>");
        scroll();
    }
});
socket.on("stdin", function(data, socketID){
    if (socketID === socket.id) {
        document.getElementById("console-content").innerHTML += data.replace("\n", "<br>");
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
        document.getElementById("console-content").innerHTML += "<br>/" + projectName + "> ";
        scroll();
    }
});
setInterval(() => {
    if (document.getElementsByClassName("console-cursor").length === 0) {
        document.getElementById("console-content").innerHTML += "<span class='console-cursor'>█</span>";
    } else {
        Array.from(document.getElementsByClassName("console-cursor")).forEach(cursor => {
            cursor.remove();
        });
    }
}, 600);
function scroll() {
    document.getElementById("console").scrollTo(0, document.getElementById("console-content").scrollWidth);
}
setTimeout(function () {
    if (!connected) {
        document.getElementById("save-div").style.display = 'block';
    }
}, 60000);
function updateName() {
    socket.emit("updateName", projectId, document.getElementById("name-input").value);
    projectName = document.getElementById("name-input").value;
    document.title = "Discord Scratch - " + projectName;
}
document.getElementById("hide-show-arrow").addEventListener("click", function(event) {
    if (document.getElementsByClassName("console-div")[0].style.display === "none") {
        document.getElementsByClassName("console-div")[0].style.display = "";
        document.getElementsByClassName("js-viewer-div")[0].style.display = "";
        document.getElementsByClassName("editor-div")[0].style.right = "";
        document.getElementById("hide-show-arrow").style.left = "";
        document.getElementById("hide-show-arrow").style.transform = "";
        Blockly.svgResize(workspace);
    } else {
        document.getElementsByClassName("console-div")[0].style.display = "none";
        document.getElementsByClassName("js-viewer-div")[0].style.display = "none";
        document.getElementsByClassName("editor-div")[0].style.right = "0";
        document.getElementById("hide-show-arrow").style.left = "100%";
        document.getElementById("hide-show-arrow").style.transform = "translate(-100%, -50%) rotate(180deg)";
        Blockly.svgResize(workspace);
    }
});
function upload(e) {
    document.getElementById('file-menu').classList.remove('visible');
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(contents), workspace);
    };
    reader.readAsText(file);
}
document.getElementById('file-input').addEventListener('change', upload, false);
function download() {
    var file = new Blob([Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace))], { type: "text/xml" });
    var a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = projectName + ".ds";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
function downloadJS() {
    var file = new Blob([start + Blockly.JavaScript.workspaceToCode(workspace) + end], { type: "text/xml" });
    var a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = projectName + ".js";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}