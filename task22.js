function fun(){
    document.getElementById('one').innerHTML = "Screen With : " +screen.width;
    document.getElementById('two').innerHTML = "Screen With : " +screen.height;
    document.getElementById('three').innerHTML = "Screen availwidth :" +screen.availWidth;
    document.getElementById('four').innerHTML = "Screen availHeight :" +screen.availHeight;
    document.getElementById('five').innerHTML = "Screen pixel depth :" +screen.pixelDepth;
    document.getElementById('six').innerHTML =  "Screen colordepth :" +screen.colorDepth;
}