const contactForm=document.querySelector(".formulario");
const nome=document.getElementById("nome");
const cidade=document.getElementById("cidade");
const email=document.getElementById("email");
const tel=document.getElementById("telefone");
const mensaje=document.getElementById("mensaje");
contactForm.addEventListener("submit",(e)=>{
  let formData={
    nome:nome.value,
    cidade:cidade.value,
    email:email.value,
    tel:tel.value,
    mensaje:mensaje.value
  }                                    
});
document.onkeydown = function (t) {
  if(t.which == 9 || t.which == 13){
    return false;
  }
}
var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var Form4 = document.getElementById("Form4");
var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Back3 = document.getElementById("Back3");
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
const pagoCartao = document.getElementById("dadosCartao");
const pagoBoleto = document.getElementById("dadosBoleto");
const botaoCartao = document.getElementById("botaocartao");
const botaoBoleto = document.getElementById("botaoboleto");
botaoCartao.addEventListener("click",(e)=>{
  pagoCartao.style.display="block";
  pagoBoleto.style.display="none";
});
botaoBoleto.addEventListener("click",(e)=>{
  pagoCartao.style.display="none";
  pagoBoleto.style.display="block";
});
function run() {
  var srt = document.getElementById("srt");
  var cursointeres = document.getElementById("cursointeres");
  srt.value = cursointeres.value;
  var validade = document.getElementById("validade");
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear()+1;
  validade.innerHTML = day + " / " + month + " / " + year;
  var interes = document.getElementById("interes");
  var interes1 = document.getElementById("interes1");  
  var target = document.getElementById("cursointeres").value;
  var point = parseFloat(target);
  interes.innerHTML = "$"+point;
  interes1.innerHTML = "$"+((point*1.1) / 2).toFixed(2) +" cada uma.";
}
Next1.disabled=true;
const Pass = document.getElementById("password");
const ConfPass = document.getElementById("confirm_password");
const errmsg = document.getElementById("errmsg");
const emailCadastro = document.getElementById("emailCadastro");
ConfPass.addEventListener("keyup",(e)=>{
  if(Pass.value!==ConfPass.value || emailCadastro.value==""){
    Next1.disabled=true;
    errmsg.innerHTML="As senhas devem coincidir";
  } else {
    errmsg.innerHTML="";
    Next1.disabled=false;
  }
});
Pass.addEventListener("keyup",(e)=>{
  if(Pass.value!==ConfPass.value || emailCadastro.value==""){
    Next1.disabled=true;
    errmsg.innerHTML="As senhas devem coincidir";
  } else {
    errmsg.innerHTML="";
    Next1.disabled=false;
  }
});
Next1.onclick = function() {
  Form1.style.left= "-750px";
  Form2.style.left= "50px";
  menu1.classList.remove("active");
  menu2.classList.add("active");
}
Back1.onclick = function() {
  Form1.style.left= "40px";
  Form2.style.left= "750px";
  menu1.classList.add("active");
  menu2.classList.remove("active");
}
Next2.onclick = function() {
  Form2.style.left= "-750px";
  Form3.style.left= "50px";
  menu3.classList.add("active");
  menu2.classList.remove("active");
}
Back2.onclick = function() {
  Form2.style.left= "50px";
  Form3.style.left= "750px";
  menu3.classList.remove("active");
  menu2.classList.add("active");
}
Next3.onclick = function() {
  Form3.style.left= "-750px";
  Form4.style.left= "50px";
  menu3.classList.remove("active");
  menu4.classList.add("active");
}
Back3.onclick = function() {
  Form3.style.left= "50px";
  Form4.style.left= "750px";
  menu3.classList.add("active");
  menu4.classList.remove("active");
  pagoCartao.style.display="none";
  pagoBoleto.style.display="none";
}