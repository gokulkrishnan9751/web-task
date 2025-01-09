
function fun() {
    let n=document.getElementById('one').value
    let k=0;
    let result = ""; 
    for (let i = 2; i <= n; i++) { // Loop through numbers from 2 to n
        let isPrime = true;
        for (let j = 2; j < i; j++) { // Check divisibility from 2 to (i-1)
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
         if (isPrime) {
            result += i + "  "; 
            k++;
        }
        
    }
     document.getElementById('two').innerHTML=result;
     const div = document.getElementById("two");
     div.style.backgroundColor = "lightgreen";
     div.style.color = "darkblue";
     div.style.fontWeight = "bold";
     div.style.width= k+120 + "px";
     div.style.border="1px solid black";
     div.style.height=(k/8)*30+"px";
     div.style.fontSize="large";
    }