
function fun() {
    let s=document.getElementById('one').value;
    let temp="";
    if (s>12){
        temp = "Out of range";
    }
    else{
        for (let i = 0; i <= s; i++) {
            temp += i +" ";
        }
    }
    
     document.getElementById('two').innerHTML=temp;
     const div = document.getElementById("two");
    //  div.style.backgroundColor = "lightgreen";
     div.style.color = "darkblue";
     div.style.fontWeight = "bold";
    //  div.style.width= "100px";
    //  div.style.border="5px solid black";
    //  div.style.height="50px";
     div.style.fontSize="xx-large";
    //  div.style.paddingLeft="17px";
    //  div.style.paddingTop="18px";
    
}