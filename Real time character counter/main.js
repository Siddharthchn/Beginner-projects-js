const textAreaEl = document.getElementById("textarea");
const totalCounterEL = document.getElementById("total-counter");
const remainingCounterEL = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()
});

updateCounter()

function updateCounter(){
   totalCounterEL.innerText= textAreaEl.value.length;
   remainingCounterEL.innerText =  textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}