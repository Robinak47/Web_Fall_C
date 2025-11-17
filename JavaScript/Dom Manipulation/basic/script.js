
const element1= document.getElementById("div1");
element1.style.backgroundColor="red";

const arrayOfElement= Array.from(document.getElementsByClassName("d"));
console.log(arrayOfElement);
arrayOfElement[0].style.backgroundColor="green";

arrayOfElement.forEach(x=>
{
    x.style.backgroundColor="orange"
}
)


let arrayOfElement2=document.getElementsByName("d3")
console.log("Name")
console.log(arrayOfElement2)

arrayOfElement2.forEach(x=>
{
    x.style.display="inline";
    x.style.backgroundColor="rgba(105, 199, 231, 1)"
}
)

let element3=document.querySelector("#div1");
element3.style.display="inline";

let elementArray3=document.querySelectorAll(".d");
elementArray3.forEach(x=>
{
    x.style.display="inline"
}
)