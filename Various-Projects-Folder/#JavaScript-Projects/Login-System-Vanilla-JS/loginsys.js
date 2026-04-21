let userName = document.getElementById("user");
let passWord = document.getElementById("pass");
let login = document.getElementById("btn");
let passVisitog = document.getElementById("passVissible");
let eyebtn = document.querySelector(".fa-eye-slash");

function afterlogin(){
    location.reload()
}
userName.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        document.getElementById("noticePass").innerHTML = "Enter Password !!!";
        document.getElementById("noticePass").style.display = "block";
    }
});
passWord.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        document.getElementById("noticePass").innerHTML = "Invalid Password !!!";
    }
});
function loginUser (){
    if(passWord.value == userName.value +"1234"){
        console.log("user can login");
        document.getElementById("loginboxx").style.display = "none";
        document.getElementById("blurGd").style.display = "none";
        document.getElementById("profileName").innerHTML = userName.value ;
    }else{
        console.log("user can't login");
        document.getElementById("noticePass").style.display = "block";
    }
};

passVisitog.addEventListener("click",()=>{
    eyebtn.classList.toggle("fa-eye");

});

function passwordToggle(){
    let x = document.querySelector("#pass");
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password";
    }
}

passWord.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        login.click();
    }
});

