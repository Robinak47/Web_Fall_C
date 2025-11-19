const nameTF=document.getElementById("nameTF");
const ageTF=document.getElementById("ageTF");
const emailTF=document.getElementById("emailTF");
const maleRB=document.getElementById("maleRB");
const femaleRB=document.getElementById("femaleRB");
const cricketCMB=document.getElementById("cricketCMB");
const footballCMB=document.getElementById("footballCMB");
const country=document.getElementById("country");
const fileUpload=document.getElementById("fileUpload");

const nameERR=document.getElementById("nameERR");
const ageERR=document.getElementById("ageERR");
const emailERR=document.getElementById("emailERR");
const genderERR=document.getElementById("genderERR");
const sportsERR=document.getElementById("sportsERR");
const countryERR=document.getElementById("countryERR");
const fileERR=document.getElementById("fileERR");

const emailRegex=/\S+@\S+\.\S+/;



function formValidate()
{
    const nameRegex=/^[a-zA-Z]+$/;
    let hasERR=false;

    if(nameTF.value.trim()==="")
    {

        hasERR=true;
        nameERR.innerHTML="name cannot be empty";
        nameERR.style.color="red";
        
    }

    else
    {
        if(!nameRegex.test(nameTF.value))
        {
            hasERR=true;
            nameERR.innerHTML="name cannot have any special char or numbers";
            nameERR.style.color="red";
        }
    }

    if(ageTF.value<1)
    {
        hasERR=true;
        
        ageERR.innerHTML="age should be number";
        ageERR.style.color="red";
    }

    else
    {
        if(ageTF.value>100)
        {
            hasERR=true;
           
            ageERR.innerHTML="age should be between 1 to 100";
            ageERR.style.color="red";
        }
    }

    if(emailTF.value.trim()==="")
    {
        hasERR=true;
        emailERR.innerHTML="email should not be empty";
        emailERR.style.color="red";
    }

    else
    {
        if(!emailRegex.test(emailTF.value))
        {
            hasERR=true;
            emailERR.innerHTML="email pattern did not match";
            emailERR.style.color="red";
        }
    }

    if(!maleRB.checked && !femaleRB.checked)
    {
        hasERR=true;
        genderERR.innerHTML="email should not be empty";
        genderERR.style.color="red";
    }

    if(!cricketCMB.checked && !footballCMB.checked)
    {
        hasERR=true;
        sportsERR.innerHTML="email should not be empty";
        sportsERR.style.color="red";
    }

    if(country.value.trim()==="")
    {
        hasERR=true;
        countryERR.innerHTML="country should not be selected";
        countryERR.style.color="red";
    }

    if(fileUpload.value.trim()==="")
    {
        hasERR=true;
        fileERR.innerHTML="file Should be uploaded";
        fileERR.style.color="red";
    }


    
    if(hasERR)
    {
        return false;
    }

    else
    {
        return true;
    }

}