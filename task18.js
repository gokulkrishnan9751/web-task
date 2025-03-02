
function fun() {
    let s=document.getElementById('one').value;
    let r = ""
    let g = ""
    for (let i = s.length - 1; i >= 0; i--) {
      r += s[i];
    }
    
    if(r==s){
        g = "YES"
    }
    else{
        g = "NO"
    }
     document.getElementById('two').innerHTML=g;
     const div = document.getElementById("two");
     div.style.backgroundColor = "lightgreen";
     div.style.color = "darkblue";
     div.style.fontWeight = "bold";
     div.style.width= "100px";
     div.style.border="5px solid black";
     div.style.height="50px";
     div.style.fontSize="xx-large";
     div.style.paddingLeft="17px";
     div.style.paddingTop="18px";
    
}