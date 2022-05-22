

const inputmail=document.getElementById("Mail")
const inputFirstName=document.getElementById("Vorname")
const inputLastName=document.getElementById("Nachname")
const inputphone=document.getElementById("Telefonnummer")
const inputagb=document.getElementById("CheckAgbs")
const inputrad1=document.getElementById("rad1")
const inputrad2=document.getElementById("rad2")

const errMail=document.getElementById("ErrormessageMail")
const errFirstName=document.getElementById("ErrormessageFirstName")
const errLastName=document.getElementById("ErrormessageLastName")
const errphone=document.getElementById("ErrormessageNumber")
const erragb=document.getElementById("ErrormessageAgb")
const errRad=document.getElementById("Errormessageradio")



let validateFirst=false
let validateLast=false
let validateMail=false
let validatePhone=false
let validateAgbs=false
let validaterad1=false
let validaterad2=false

const regularexpressionMail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const regexPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

inputmail.addEventListener('input',()=>{
    if(regularexpressionMail.test(inputmail.value)===false){
        errMail.innerHTML="Ungültiges Eingabeformat!!"
        inputmail.style="border-color:red"
    }else{
        errMail.innerHTML=""
        inputmail.style="border-color:green"
        validateMail=true
}
})

inputphone.addEventListener('input',()=>{
    if(regexPhone.test(inputphone.value)===false){
        errphone.innerHTML="Ungültiges Eingabeformat!!"
        inputphone.style="border-color:red"
    }else{
        errphone.innerHTML=""
        inputphone.style="border-color:green"
        validatePhone=true
}
})


function validate(){
    if(inputmail.value===""){
        errMail.innerHTML="Textfeld muss gefüllt sein"
        
        inputmail.style="border-color:red"

    }
    
    if(inputphone.value===""){
        errphone.innerHTML="Textfeld muss gefüllt sein"
        inputphone.style="border-color:red"
    }
    if(inputFirstName.value===""){
        errFirstName.innerHTML="Textfeld muss gefüllt sein"
        inputFirstName.style="border-color:red"
    }
    else{
        inputFirstName.style="border-color:green"
        errFirstName.innerHTML=""
        validateFirst=true
    }

    
    if(inputLastName.value===""){
        errLastName.innerHTML="Textfeld muss gefüllt sein"
        inputLastName.style="border-color:red"
    }
    else{
        errLastName.innerHTML=""
        inputLastName.style="border-color:green"
        validateLast=true
    }

    if(inputagb.checked===false){
        erragb.innerHTML="AGB's müssen bestätigt werden"
        
    }
    else{
        erragb.innerHTML=""
        validateAgbs=true
    }
    if(inputrad1.checked===false&&inputrad2.checked===false){
        errRad.innerHTML="Radio muss ausgewählt werden."
    }
    else{
        errRad.innerHTML=""
        validaterad1=true
    }
    popup()

}




function popup(){

    const outfirst=document.getElementById("outFirstname")
    const outlast=document.getElementById("outLastname")
    const outmail=document.getElementById("outMail")
    const outphone=document.getElementById("outPhone")
    const outagb=document.getElementById("outAgb")
    const outradio=document.getElementById("outAgb")

    if(validateFirst===true&&validateLast===true&&validateMail===true&&validatePhone===true&&validateAgbs===true&&validaterad1===true||validaterad2===true){
        document.getElementById("popup").style.visibility="visible"
        document.getElementById("inputform").style.visibility="hidden"
        outfirst.innerHTML=inputFirstName.value
        outlast.innerHTML=inputLastName.value
        outmail.innerHTML=inputmail.value
        outphone.innerHTML=inputphone.value
        outagb.innerHTML="Agb's bestätigt"
        if(inputrad1.checked===true){
            outradio.innerHTML="Radio 1 checked"
        }
        if(inputrad2.checked===true){
            outradio.innerHTML="Radio 2 checked"
        }
            validateFirst=false
            validateLast=false
            validateMail=false
            validatePhone=false
            validateAgbs=false
            validaterad1=false
            validaterad2=false  
    }
}

function closepopup(){
    
    document.getElementById("popup").style.visibility="hidden"
    document.getElementById("inputform").style.visibility="visible"
}