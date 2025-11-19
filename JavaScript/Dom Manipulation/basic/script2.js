
const body=document.body;
//const body=document.getElementById("body");

const div1=document.createElement("div");
div1.setAttribute("id","div1");
div1.innerText="hello Student";
div1.style.backgroundColor="gray";
body.appendChild(div1);


const p1=document.createElement("p");
p1.id="p1";
p1.innerText="Web Tech";


const p2=document.createElement("p");
p2.id="p2";
//p2.style.display="inline";
p2.innerHTML="<b>Very Difficult</b>";

div1.append(p1,p2);

const h1=document.createElement("h1");
h1.id="h1T";
h1.innerText="moew";
div1.prepend(h1);

const h2=document.createElement("h2");
h2.id="h2T";
h2.innerText="moew2";
//h2.style.display="inline";
div1.insertBefore(h2, p2);


const sp1=document.createElement("span");
sp1.innerHTML="meow meow";
sp1.id="sp1";
sp1.style.display="block";
div1.replaceChild(sp1, p1);

const sp2=document.createElement("span");
sp2.id="sp2";
sp2.style.display="block";
sp2.innerText="Heizanburg";
div1.insertAdjacentElement('beforeend', sp2);

div1.removeChild(p2);
h2.remove();

sp1.innerHTML="meow meow meow";

const btn1=document.createElement("button");
btn1.id="btn1";
btn1.innerText="click me";
body.append(btn1);

btn1.addEventListener('click', sayMeowMeow);

function sayMeowMeow()
{
    //alert("meow meow");

    window.location.href="https://google.com";
}

btn1.addEventListener('mouseover', mouseOverMe);

function mouseOverMe()
{
    btn1.style.backgroundColor="green";
}

btn1.addEventListener('mouseout', mouseOutFromMe);

function mouseOutFromMe()
{
    btn1.style.backgroundColor="white";
}


div1.addEventListener('mouseover', mouseOverDiv);

function mouseOverDiv()
{
    div1.style.backgroundColor="green";
}

div1.addEventListener('mouseout', mouseOutFromDiv);

function mouseOutFromDiv()
{
    div1.style.backgroundColor="gray";
}







