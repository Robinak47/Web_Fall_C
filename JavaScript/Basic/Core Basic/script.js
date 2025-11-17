
//dynamic initialization of variable
let a=10;
console.log(a);

//value assignment in variable
a=20;
console.log(a);



let val1=20;
let val2="20";
//Arithmatic ops.
console.log(val1-val2);
console.log(val1+val2);
console.log(val1/val2);
console.log(val1*val2);
console.log(val1%val2);
console.log(val1**val2);

//compare value
console.log(val1==val2);

//compare value and type
console.log(val1===val2);

//Flow Control

let country="Australia";
let state="NY";

if(country=="USA")
{
    if(state=="DC")
    {
        console.log("Are you D. Trump??");
    }

    else
    {
        console.log("are you meow?");
    }
}

else if(country=="Australia")
{
    console.log("FakiBaj");
}

else
{
    console.log("meow");
}


let day="monday";

switch(day)
{
    case "monday": console.log("Happy day");break;
    default: console.log("Meow Day");
}

(10<20)? console.log(10) : console.log(20);

//loop

for(let i=1;i<6;i++)
{
    console.log(i);
}

let valNum=100;

do{
    console.log(valNum);
    valNum++;
}while(valNum<10)

while(valNum<100)
{
    console.log(valNum);
    valNum++;
}

let fruits=["Mango","Jambura","PineApple","Kola","Banggi"];
console.log(fruits[3]);
console.log(fruits.length);
fruits.forEach(x=>
{
    console.log(x)
}
)

console.log("after push");

fruits.push("watermilon");

fruits.forEach(x=>
{
    console.log(x)
}
)

console.log("after unshift");

fruits.unshift("Orange");

fruits.forEach(x=>
{
    console.log(x)
}
)

console.log("after pop");

fruits.pop();

fruits.forEach(x=>
{
    console.log(x)
}
)

console.log("after shift");

fruits.shift();

fruits.forEach(x=>
{
    console.log(x)
}
)

console.log("after push");

fruits.push("Mango");

fruits.forEach(x=>
{
    console.log(x)
}
)

console.log(fruits.indexOf("Mango"))

console.log(fruits.lastIndexOf("Mango"))

console.log(fruits.includes("Mango"))


let newArray=fruits.slice(0,3)
console.log(newArray)
console.log(newArray.reverse())
console.log(newArray.sort())


console.log(isNaN(11));

let x="10abc"
let y=20;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)

let f="10"
let g=20;

console.log(f+g)
console.log(f-g)
console.log(f*g)
console.log(f/g)
console.log(f**g)


let str= "Bangladesh is a Bangladesh country";
console.log(str.length);
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.indexOf("is"))
console.log(str.lastIndexOf("t"))
console.log(str.includes("india"))
console.log(str.substring(11,13))
let str2="Meow, cat, bird";
console.log(str2.split(","))
console.log(str.replace("Bangladesh", "India"))
console.log(str.replaceAll("Bangladesh", "India"))
console.log(str2.charAt(0))
console.log(str.startsWith("Bangladesh"))
console.log(str.endsWith("country"))

str3=" Meow ";
console.log(str3)
console.log(str3.trim())
console.log(str3.concat("Meow"))
console.log(str3.trimStart())
console.log(str3.trimEnd())

console.log(typeof undefined);

function sayMyName()
{
    console.log("MM");
}

sayMyName();

function sayMyName(name)
{
    console.log(name)
}

sayMyName("Heizenburg");

function sum(a,b)
{
    return a+b;

}

let add=sum(10,20)
console.log(add)
console.log(sum(10,20))

function arrayOP(arr)
{
    for(let i=0; i<arr.length;i++)
    {
        arr[i]+=5;
    }

    return arr
}

let arr2=arrayOP([10,20,30])
console.log(arr2)


function sayhello()
{
    console.log("hello students")
}

sayhello()

let sayhelloToMyStudent= ()=>
{
    console.log("Hello Student")
}

sayhelloToMyStudent()

console.log(typeof sayhelloToMyStudent)




