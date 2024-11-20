let signupbtn=document.getElementById("signup")
let userInputName=document.getElementById("username")
let userInputEmail=document.getElementById("useremail")
let userInputpswd=document.getElementById("userpswd")
signupbtn.addEventListener("click",(e)=>{
   e.preventDefault()
   if(!userInputName.value==""&&!userInputEmail.value==""&&!userInputpswd.value==""){
    let name=userInputName.value;
    let email=userInputEmail.value;
    let pswd=userInputpswd.value;
    alert("signup done!!!!!!!!!!!!!!!!")
    window.location.href=("login.html")
    localStorage.setItem("name", name)
    localStorage.setItem("email",email)
    localStorage.setItem("pswd",pswd)
   }
   else{
    alert("pls fill the fields")
   }
}

)