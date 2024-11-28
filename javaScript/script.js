const addPlayer = document.querySelector("#addPlayer");
const popupClose = document.querySelector("#popup-close");
const addPlayerForm = document.querySelector("#addPlayerForm");
addPlayer.addEventListener("click",()=>{
    addPlayerForm.classList.toggle("hidden")
    
})
popupClose.addEventListener("click",()=>{
    addPlayerForm.classList.add("hidden")
})
