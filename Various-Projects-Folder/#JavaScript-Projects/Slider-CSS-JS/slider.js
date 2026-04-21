let scrollControl = document.querySelector(".gallery");
let left = document.querySelector("#back");
let right = document.querySelector("#front");

// scrollControl.addEventListener("wheel", (e) => {
//     e.preventDefault();
//     scrollControl.scrollLeft += e.deltaY;
// });

right.addEventListener("click",()=>{
    scrollControl.style.scrollBehavior ="smooth";
    scrollControl.scrollLeft += 900;
});

left.addEventListener("click",()=>{
    scrollControl.style.scrollBehavior ="smooth";
    scrollControl.scrollLeft -= 900;
});