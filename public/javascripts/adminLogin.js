/*ADMIN BUTTON LOGIN */
let adminLogin = document.getElementById("adminLogin");
let adminPwd = document.getElementById("adminPwd");
let adminBtn = document.getElementById("adminBtn");

adminBtn.addEventListener("click",(e)=>{
  if (adminLogin.value!== "admin" || adminLogin.value==null || adminPwd.value!=="admin" || adminPwd.value==null){  
    e.preventDefault();
  }   
});