let doc = document
let btn = doc.getElementsByTagName("gen");
let rNum = null;

function gen() {
    rNum = Math.floor((Math.random() * 96823474) + 1);
    doc.getElementById("id").innerHTML = rNum;
}