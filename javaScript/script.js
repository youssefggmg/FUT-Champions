const addPlayer = document.querySelector("#addPlayer");
const popupClose = document.querySelector("#popup-close");
const addPlayerForm = document.querySelector("#addPlayerForm");
const addToPlace = document.querySelectorAll(".addToPlace");
const modale = document.querySelector("#modale");

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
            <div id="posetions">
            <div class="flex">
    <div>
        <input name="diving" type="number" id="diving"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Diving">
        <span id="playerDivingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="handling" type="number" id="handling"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Handling">
        <span id="playerHandlingError" class="text-red-500 text-sm"></span>
    </div>
</div>
<div class="flex">
    <div>
        <input name="kicking" type="number" id="kicking"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Kicking">
        <span id="playerKickingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="reflexes" type="number" id="reflexes"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Reflexes">
        <span id="playerReflexesError" class="text-red-500 text-sm"></span>
    </div>
</div>
            </div>
            <button id="submit"
                class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 mt-3 disabled:bg-gray-400">
                Continue
            </button>
        </form>
    </div>
</div>`
let allReservPlayers;

const getReservPlayers = async () => {
    try {
        const localData = localStorage.getItem("reserv");
        if (localData) {
            allReservPlayers = JSON.parse(localData);
            return allReservPlayers;
        } else {
            const response = await fetch("https://raw.githubusercontent.com/aymanebenhima/FUT-Champ-Ultimate-Team-Assets/refs/heads/main/players.json");
            const data = await response.json();
            const { players } = data;
            const cleanedPlayers = players.map(({ club, nationality, rating, physical, ...rest }) => rest);
            localStorage.setItem("reserv", JSON.stringify(cleanedPlayers));
            allReservPlayers = cleanedPlayers;
        }
    } catch (error) {
        console.error("Error fetching reserve players:", error);
        allReservPlayers = [];
        return [];
    }
};

getReservPlayers();
setTimeout(() => {
    console.log(allReservPlayers);
}, 300);

addPlayer.addEventListener("click", () => {
    modale.innerHTML = from;
    const popupClose = document.querySelector("#popup-close");
    const submet = document.querySelector("#submit");
    const playerPosition = document.querySelector("#Player-pos");
    const posetions = document.querySelector("#posetions");
    playerPosition.addEventListener("change", () => {
        const playerPositionValue = playerPosition.value
        if (playerPositionValue != "GK") {
            posetions.innerHTML = "";
            posetions.innerHTML = `<div class="flex">
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
            </div>`;
        }
        else if (playerPositionValue == "GK") {
            posetions.innerHTML = "";
            posetions.innerHTML = `<div class="flex">
    <div>
        <input name="diving" type="number" id="diving"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Diving">
        <span id="playerDivingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="handling" type="number" id="handling"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Handling">
        <span id="playerHandlingError" class="text-red-500 text-sm"></span>
    </div>
</div>
<div class="flex">
    <div>
        <input name="kicking" type="number" id="kicking"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Kicking">
        <span id="playerKickingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="reflexes" type="number" id="reflexes"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Reflexes">
        <span id="playerReflexesError" class="text-red-500 text-sm"></span>
    </div>
</div>`;
        }
    })
    submet.addEventListener("click", (e) => {
        e.preventDefault()
        const playerNameError = document.getElementById('playerNameError');
        const playerImageError = document.getElementById('playerImageError');
        const playerName = document.querySelector("#playerName");
        const playerImage = document.querySelector("#playerImage");
        if (!/^[a-zA-Z ]{2,30}$/.test(playerName.value)) {
            playerNameError.innerHTML = "the player name is not required"
            return
        }
        else {
            playerNameError.innerHTML = ""
        }
        if (playerImage.value.length < 20) {
            playerImageError.innerHTML = "the player image is not required and it must be loger than 20 charecter";
            return
        } else {
            console.log(typeof (playerImage.value.length));

            playerImageError.innerHTML = "";
        }
        const playerPosition = document.querySelector("#Player-pos");
        const playerPositionValue = playerPosition.value
        if (playerPositionValue !== "GK") {
            const pace = document.querySelector("#pace");
            const shooting = document.querySelector("#shooting");
            const dribbling = document.querySelector("#dribbling");
            const defending = document.querySelector("#defending");
            const playerPaceError = document.getElementById('playerPaceerror');
            const playerShootingError = document.getElementById('playeshottingerror');
            const playerDribblingError = document.getElementById('playerdribblingerror');
            const playerDefendingError = document.getElementById('playerdefendingerror');
            if (pace.value <= 0 || pace.value > 100) {
                playerPaceError.innerHTML = "The pace value must be greater than 0 and less than or equal to 100.";
                return
            } else {
                playerPaceError.innerHTML = "";
            }
            if (shooting.value <= 0 || shooting.value > 100) {
                playerShootingError.innerHTML = "The shooting value must be greater than 0 and less than or equal to 100.";
                return
            } else {
                playerShootingError.innerHTML = "";
            }
            if (dribbling.value <= 0 || dribbling.value > 100) {
                playerDribblingError.innerHTML = "The dribbling value must be greater than 0 and less than or equal to 100.";
                return
            } else {
                playerDribblingError.innerHTML = "";
            }
            if (defending.value <= 0 || defending.value > 100) {
                playerDefendingError.innerHTML = "The defending value must be greater than 0 and less than or equal to 100.";
                return
            } else {
                playerDefendingError.innerHTML = "";
            }
            const player = {
                playerName: playerName.value,
                playerImage: playerImage.value,
                playerPos: playerPositionValue,
                pace: pace.value,
                shooting: shooting.value,
                dribbling: dribbling.value,
                defending: defending.value,
                curentposetion: "reserve bench"
            }
        }
        if (playerPositionValue === "GK") {
            // Selecting inputs
            const divingInput = document.querySelector('#diving');
            const handlingInput = document.querySelector('#handling');
            const kickingInput = document.querySelector('#kicking');
            const reflexesInput = document.querySelector('#reflexes');

            // Selecting error containers 
            const divingError = document.querySelector('#playerDivingError');
            const handlingError = document.querySelector('#playerHandlingError');
            const kickingError = document.querySelector('#playerKickingError');
            const reflexesError = document.querySelector('#playerReflexesError');


            if (divingInput.value <= 0 || divingInput.value > 100) {
                divingError.innerHTML = "The diving value must be greater than 0 and less than or equal to 100.";
                return;
            } else {
                divingError.innerHTML = "";
            }

            if (handlingInput.value <= 0 || handlingInput.value > 100) {
                handlingError.innerHTML = "The handling value must be greater than 0 and less than or equal to 100.";
                return;
            } else {
                handlingError.innerHTML = "";
            }
            if (kickingInput.value <= 0 || kickingInput.value > 100) {
                kickingError.innerHTML = "The kicking value must be greater than 0 and less than or equal to 100.";
                return;
            } else {
                kickingError.innerHTML = "";
            }

            // Validation for reflexes
            if (reflexesInput.value <= 0 || reflexesInput.value > 100) {
                reflexesError.innerHTML = "The reflexes value must be greater than 0 and less than or equal to 100.";
                return;
            } else {
                reflexesError.innerHTML = "";
            }
            const player = {
                playerName: playerName.value,
                playerImage: playerImage.value,
                playerPos: playerPositionValue,
                pace: pace.value,
                shooting: shooting.value,
                dribbling: dribbling.value,
                defending: defending.value,
                curentposetion: "reserve bench"
            }
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
