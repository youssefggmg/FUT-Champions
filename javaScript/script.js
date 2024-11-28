const addPlayer = document.querySelector("#addPlayer");
const popupClose = document.querySelector("#popup-close");
const addPlayerForm = document.querySelector("#addPlayerForm");
// fields in the form 
const playerName = document.querySelector("#playerName");
const image = document.querySelector("#PlayerImage");

addPlayer.addEventListener("click",()=>{
    addPlayerForm.classList.toggle("hidden")

})
popupClose.addEventListener("click",()=>{
    addPlayerForm.classList.add("hidden")
})
