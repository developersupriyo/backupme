const uname = document.getElementById("username");
const btn = document.getElementById("submit");
btn.addEventListener("click", () => {
    const value = uname.value;
    console.log(value);
    localStorage.setItem("name", value);
    nameme.innerHTML = "Hi ✌️"+" "+value;
});
const nameme = document.getElementById("display");
function displayName(){
   nameme.innerHTML = "Welcome, Back" +" "+ localStorage.getItem("name");
}
displayName();