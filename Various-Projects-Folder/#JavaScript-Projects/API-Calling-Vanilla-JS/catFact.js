let screen = document.getElementById("catfacts");
let btn = document.getElementById("search");
async function data(){
    let catFacts = await fetch('https://cat-fact.herokuapp.com/facts');
    const facts = await catFacts.json();
    const catText = facts[`${Math.floor(Math.random()*4)}`].text;
    screen.innerHTML = catText;
}
data();

btn.addEventListener("click", () => {window.location.reload()});
console.log(rdnm());
