
var box=document.createElement("div");
box.style.textAlign="center";
box.style.marginTop="50px";

var h1=document.createElement("h1");
h1.innerHTML="Covid 19 Tracker";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style.Width="36%";
input.setAttribute("placeholder","Enter the country name");

var linebrake=document.createElement("br");
var button=document.createElement("button");
button.classList.add("btn","btn-primary");
button.style.margin="10px";
button.innerHTML="Search";
button.addEventListener("click",foo);

var output=document.createElement("div");
output.style.fontSize="20px";

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/dayone/country/${res}`;
    let res1 =await fetch(url);
    let res2 = await res1.json();
    console.log(res2);
    var index=res2.length-1;
    console.log(res2[index].Active);
    console.log(res2[index].Deaths);
    console.log(res2[index].Recovered);
    output.innerHTML=`Active :${res2[index].Active}<br>
    Death:${res2[index].Deaths} <br>
    Recovered:${res2[index].Recovered}`;
}

box.append(h1,input,linebrake,button,output);
document.body.append(box);
