const amt = document.getElementById("amount")
const percent = document.getElementById("percentage")
const ans = document.getElementById("answer")
const btn = document.getElementById("calc")

function percentCal (){
    const amtvalue = amt.value ;
    const percentvalue = percent.value ;
    let x = amtvalue * percentvalue / 100 ;
    let final = amtvalue - x ;
    ans.innerHTML = "₹" + " " + final;
}

btn.addEventListener("click", percentCal)

