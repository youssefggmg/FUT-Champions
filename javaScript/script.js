const addPlayer = document.querySelector("#addPlayer");
const popupClose = document.querySelector("#popup-close");
const addPlayerForm = document.querySelector("#addPlayerForm");
const addToPlace = document.querySelectorAll(".addToPlace");
const modale = document.querySelector("#modale");
// selection of inputs and elements
const playerName = document.querySelector("#playerName");
const playerImage = document.querySelector("#playerImage");
const playerPos = document.querySelector("#Player-pos");
const pace = document.querySelector("#pace");
const shooting = document.querySelector("#shooting");
const dribbling = document.querySelector("#dribbling");
const defending = document.querySelector("#defending");
const from = `<div class="relative bg-white rounded-lg shadow">
    <button type="button"
        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        id="popup-close">
        <svg aria-hidden="true" class="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
    </button>
    <div class="p-1">
        <form class="w-full p-11">
            <input name="name" type="text"
                class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Player name" value="" id="playerName">
            <span id="playerNameError" class="text-red-500 text-sm"></span>
            <input name="PlayerImage" type="text"
                class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="player-image" value="" id="playerImage">
            <span id="playerImageError" class="text-red-500 text-sm"></span>
            <select id="Player-pos"
                class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1">
                <option value="GK">GK</option>
                <option value="RB">RB</option>
                <option value="LB">LB</option>
                <option value="CB">CB</option>
                <option value="DM">DM</option>
                <option value="CM">CM</option>
                <option value="LM">LM</option>
                <option value="RM">RM</option>
                <option value="AM">AM</option>
                <option value="RW">RW</option>
                <option value="LW">LW</option>
                <option value="ST">ST</option>
                <option value="CF">CF</option>
            </select>
            <span id="playerPosetionError" class="text-red-500 text-sm"></span>
            <div class="flex">
                <div>
                    <input name="pace" type="number" id="pace"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="pace">
                    <span id="playerPaceerror" class="text-red-500 text-sm"></span>
                </div>
                <div>
                    <input name="shooting" type="number" id="shooting"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="shooting">
                    <span id="playeshottingerror" class="text-red-500 text-sm"></span>
                </div>
            </div>
            <div class="flex">
                <div>
                    <input name="dribbling" type="number" id="dribbling"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="dribbling">
                    <span id="playerdribblingerror" class="text-red-500 text-sm"></span>
                </div>
                <div>
                    <input name="defending" type="number" id="defending"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="defending">
                    <span id="playerdefendingerror" class="text-red-500 text-sm"></span>
                </div>
            </div>
            <button id="submit"
                class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 mt-3 disabled:bg-gray-400">
                Continue
            </button>
        </form>
    </div>
</div>`

addPlayer.addEventListener("click", () => {
    modale.innerHTML = from;
    const popupClose = document.querySelector("#popup-close");
    const submet = document.querySelector("#submit");
    submet.addEventListener("click", (e) => {
        e.preventDefault()
        const playerNameError = document.getElementById('playerNameError');
        const playerImageError = document.getElementById('playerImageError');
        const playerPaceError = document.getElementById('playerPaceerror');
        const playerShootingError = document.getElementById('playeshottingerror');
        const playerDribblingError = document.getElementById('playerdribblingerror');
        const playerDefendingError = document.getElementById('playerdefendingerror');
        if (!/^[a-zA-Z ]{2,30}$/.test(playerName.value)) {
            playerNameError.innerHTML = "the player name is not required"
            return
        }
        else {
            playerNameError.innerHTML = ""
        }
        if (playerImage.value.lenght < 20) {
            playerImageError.innerHTML = "the player image is not required";
        } else {
            playerImageError.innerHTML = "";
        }
        if (pace.value <= 0 || pace.value > 100 ||
            shooting.value <= 0 || shooting.value > 100 ||
            dribbling.value <= 0 || dribbling.value > 100 ||
            defending.value <= 0 || defending.value > 100) {
            playerPaceError.innerHTML = ""
            playerShootingError.innerHTML = ""
            playerDribblingError.innerHTML = ""
            playerDefendingError.innerHTML = ""
        }
        
        const player = {
            playerName: playerName.value,
            playerImage: playerImage.value,
            playerPos: playerPos.value,
            pace: pace.value,
            shooting: shooting.value,
            dribbling: dribbling.value,
            defending: defending.value,
            curentposetion: "reserve bench"
        }
    })
    popupClose.addEventListener("click", () => {
        modale.innerHTML = "";
    })
})
addToPlace.forEach((place) => {
    place.addEventListener("click", () => {
        modale.innerHTML = from;
        const popupClose = document.querySelector("#popup-close");
        popupClose.addEventListener("click", () => {
            modale.innerHTML = "";
        })
    });
});
