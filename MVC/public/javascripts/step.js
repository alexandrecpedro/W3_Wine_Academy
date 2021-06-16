const form = document.getElementById("st1")
const pass = document.getElementById("password")
const confPass = document.getElementById("confirm")
const errorElement = document.getElementById("err")
const btn = document.getElementById("btn1")

form.addEventListener("submit",(e)=>{
    if(pass.value!=confPass.value){
        e.preventDefault()
    } if (pass.value==confPass.value){
        e.returnValue = true;
    }
    
})
