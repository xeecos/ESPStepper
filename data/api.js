document.getElementById("defaultOpen").click();
document.getElementById("speed-range").value = localStorage.getItem("speed")||1;
document.getElementById("speed-input").value = Math.pow(2,document.getElementById("speed-range").value-1);
document.getElementById("speed-range").oninput = function () {
    document.getElementById("speed-range").value = this.value;
    document.getElementById("speed-input").value = Math.pow(2,document.getElementById("speed-range").value-1);
    localStorage.setItem("speed", this.value);
}
$(function () {
    window.Translator.translate(localStorage.getItem("lang"));
    document.getElementById("lang-select").value = localStorage.getItem("lang")||"english";
});
document.getElementById("lang-select").oninput = function()
{
    window.Translator.translate(this.value);
    
    $(function () {
        window.Translator.translate(this.value);
    });
    localStorage.setItem("lang", this.value);
}

function openPage(evt, pageName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
let waitTime = 1000;
function request(url) {
    return new Promise(resolve => {
        // document.getElementById('appLoading').style.display = 'block';
        let oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function () {
            document.getElementById('appLoading').style.display = 'none'
            resolve(this.responseText);
        });
        oReq.open("GET", url);
        oReq.send();
    });
}
async function onForwardDirection() {
    // document.getElementById('appLoading').style.display = 'block';
    await onSpeed(1);
}
async function onBackwardDirection() {
    // document.getElementById('appLoading').style.display = 'block';
    await onSpeed(-1);
}
function onSpeed(dir) {
    return new Promise(resolve => {
        let speed = document.getElementById('speed-input').value;
        request(`/speed/set?speed=${speed*dir}`).then(res => {
            resolve(JSON.parse(res))
        });
    })
}