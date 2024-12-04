const addPlayer = document.querySelector("#addPlayer");
const popupClose = document.querySelector("#popup-close");
const addPlayerForm = document.querySelector("#addPlayerForm");
const addToPlace = document.querySelectorAll(".addToPlace");
const modale = document.querySelector("#modale");
const reserveBench = document.querySelector("#reservebench")
let allPlayers;

const getReservPlayers = async () => {
    try {
        const localData = localStorage.getItem("players");
        if (localData) {
            allPlayers = JSON.parse(localData);
            return allPlayers;
        } else {
            const response = await fetch("https://raw.githubusercontent.com/aymanebenhima/FUT-Champ-Ultimate-Team-Assets/refs/heads/main/players.json");
            const data = await response.json();
            const { players } = data;
            const cleanedPlayers = players.map(({ club, nationality, rating, physical, passing, ...rest }) => ({
                ...rest,
                curentposetion: "reserve bench"
            }));
            localStorage.setItem("players", JSON.stringify(cleanedPlayers));
            allPlayers = cleanedPlayers;
        }
    } catch (error) {
        console.error("Error fetching reserve players:", error);
        allPlayers = [];
        return [];
    }
};


getReservPlayers();

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
                class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
                placeholder="Player name" value="" id="playerName">
            <span id="playerNameError" class="text-red-500 text-sm"></span>
            <input name="PlayerImage" type="text"
                class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
                placeholder="player-image" value="" id="playerImage">
            <span id="playerImageError" class="text-red-500 text-sm"></span>
            <select id="Player-pos"
                class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 ">
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
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Diving">
        <span id="playerDivingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="handling" type="number" id="handling"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Handling">
        <span id="playerHandlingError" class="text-red-500 text-sm"></span>
    </div>
</div>
<div class="flex">
    <div>
        <input name="kicking" type="number" id="kicking"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Kicking">
        <span id="playerKickingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="reflexes" type="number" id="reflexes"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Reflexes">
        <span id="playerReflexesError" class="text-red-500 text-sm"></span>
    </div>
</div>
            </div>
            <button id="submit"
                class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none  mt-3 disabled:bg-gray-400">
                Continue
            </button>
        </form>
    </div>
</div>`;


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
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
                        placeholder="pace">
                    <span id="playerPaceerror" class="text-red-500 text-sm"></span>
                </div>
                <div>
                    <input name="shooting" type="number" id="shooting"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
                        placeholder="shooting">
                    <span id="playeshottingerror" class="text-red-500 text-sm"></span>
                </div>
            </div>
            <div class="flex">
                <div>
                    <input name="dribbling" type="number" id="dribbling"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
                        placeholder="dribbling">
                    <span id="playerdribblingerror" class="text-red-500 text-sm"></span>
                </div>
                <div>
                    <input name="defending" type="number" id="defending"
                        class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
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
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Diving">
        <span id="playerDivingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="handling" type="number" id="handling"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Handling">
        <span id="playerHandlingError" class="text-red-500 text-sm"></span>
    </div>
</div>
<div class="flex">
    <div>
        <input name="kicking" type="number" id="kicking"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
            placeholder="Kicking">
        <span id="playerKickingError" class="text-red-500 text-sm"></span>
    </div>
    <div>
        <input name="reflexes" type="number" id="reflexes"
            class="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
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
                name: playerName.value,
                photo: playerImage.value,
                position: playerPositionValue,
                flag: flag.value,
                logo: logo.value,
                pace: pace.value,
                shooting: shooting.value,
                dribbling: dribbling.value,
                defending: defending.value,
                curentposetion: "reserve bench"
            }
            allPlayers.push(player);
            displayReservBench();
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
                name: playerName.value,
                photo: playerImage.value,
                position: playerPositionValue,
                diving: divingInput.value,
                handling: handlingInput.value,
                kicking: kickingInput.value,
                reflexes: reflexesInput.value,
                curentposetion: "reserve bench"
            }
            allPlayers.push(player);
            displayReservBench();
        }
    })
    popupClose.addEventListener("click", () => {
        modale.innerHTML = "";
    })
})
const searchForm = `
<div class="relative bg-white rounded-lg shadow">
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
            <h1 class="font-bold text-lg"> what is the name of the player you want to add</h1>
            <input name="name" type="text"
                class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 "
                placeholder="Player name" value="" id="playerName">
            <span id="playerNameError" class="text-red-500 text-sm"></span>
            <button id="submit"
                class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none  mt-3 disabled:bg-gray-400">
                Continue
            </button>
        </form>
    </div>
</div>
`
addToPlace.forEach((place) => {
    place.addEventListener("click", (e) => {
        const fieldPosetion = e.currentTarget.dataset.id;
        modale.innerHTML = searchForm;
        const playerNameError = document.getElementById('playerNameError');
        const playerName = document.querySelector("#playerName");
        const submit = document.querySelector("#submit");
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            const playerNameValue = playerName.value
            if (!/^[a-zA-Z ]{2,30}$/.test(playerNameValue)) {
                playerNameError.textContent = "Player name must be between 2 and 30 characters and only contain letters and spaces";
                return;
            }
            else {
                playerNameError.textContent = "";
            }
            const inPosetion = allPlayers.findIndex(player => player.curentposetion == fieldPosetion);
            if (inPosetion >= 0) {
                allPlayers[inPosetion].curentposetion = "reserve bench"
                const inlowerCase = playerNameValue.toLowerCase()
                const PlayerIndex = allPlayers.findIndex(player => player.name.toLowerCase().includes(inlowerCase))
                if (PlayerIndex >= 0) {
                    allPlayers[PlayerIndex].curentposetion = fieldPosetion;
                    localStorage.setItem("players", json.stringify(allPlayers));
                    displayInPlace();
                    displayReservBench();
                    modale.innerHTML = "";
                    console.log(allPlayers);
                    
                } else {
                    alert("ther is no player with this name in the players lest");
                }
            }
            else {
                const inlowerCase = playerNameValue.toLowerCase()
                const PlayerIndex = allPlayers.findIndex(player => player.name.toLowerCase().includes(inlowerCase))
                if (PlayerIndex >= 0) {
                    allPlayers[PlayerIndex].curentposetion = fieldPosetion;
                    localStorage.setItem("players", JSON.stringify(allPlayers));
                    displayInPlace();
                    displayReservBench();
                    console.log(allPlayers);
                    
                    modale.innerHTML = "";
                } else {
                    alert("ther is no player with this name in the players lest");
                }
            }
        })
        const popupClose = document.querySelector("#popup-close");
        popupClose.addEventListener("click", () => {
            modale.innerHTML = "";
        })
    });
});

const displayReservBench = () => {
    const reservPlayers = allPlayers.filter((player) => player.curentposetion === "reserve bench");
    reservPlayers.forEach(player => {
        if (player.position != "GK") {
            const playerName = player.name.slice(0, 7)
            reserveBench.innerHTML += `
        <div class="flex flex-col items-center relative ">
                    <img src="./images/216-2162479_fifa-20-card-template-hd-png-download-removebg-preview.png"
                        alt="player card" class="h-[150px] w-auto object-contain">
                    <button class="reservPlayers absolute top-6 w-[40px]">
                        <h6 class="font-bold lg:-[30%] md:-mt-[35%] md:mb-3 lg:mb-1 sm:-mt-[40%] sm:mb-[0.6rem]">${playerName}</h6>
                        <div class="flex slg:mt-1 lg:-mt-2 md:-mt-2">
                            <img src="${player.photo}"
                                class="lg:w-16  -ml-4 lg:-mt-[0.7em] md:-mt-[0.9em] md:w-14 sm:-mt-[1.1em] ssm:w-12 ssm:ml-1 player  ">
                        </div>
                        <div>
                            <div class=" text-xs font-light slf" id="stats1">
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">pace:${player.pace}</p>
                                    <p class="font-normal" id="shooting">sho:${player.shooting}</p>
                                </div>
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">def:${player.defending}</p>
                                    <p class="font-normal" id="shooting">drib:${player.dribbling}</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
        `
        }
        else if (player.position == "GK") {
            reserveBench.innerHTML += `
        <div class="flex flex-col items-center relative ">
                    <img src="./images/216-2162479_fifa-20-card-template-hd-png-download-removebg-preview.png"
                        alt="player card" class="h-[150px] w-auto object-contain">
                    <button class="reservPlayers absolute top-6 w-[40px]">
                        <h6 class="font-medium lg:-[30%] md:-mt-[35%] md:mb-3 lg:mb-1 sm:-mt-[40%] sm:mb-[0.6rem]">${player.name}</h6>
                        <div class="flex slg:mt-1 lg:-mt-2 md:-mt-2">
                            <img src="${player.photo}"
                                class="lg:w-16 -ml-4 lg:-mt-[0.7em] md:-mt-[0.9em] md:w-14 sm:-mt-[1.1em] ssm:w-12 ssm:ml-1 player  ">
                        </div>
                        <div>
                            <div class=" text-xs font-light slf" id="stats1">
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">pace:${player.pace}</p>
                                    <p class="font-normal" id="shooting">ref:${player.reflexes}</p>
                                </div>
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">def:${player.defending}</p>
                                    <p class="font-normal" id="shooting">drib:${player.dribbling}</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
        `
        }
    })
}
const displayInPlace = () => {
    addToPlace.forEach(place => {
        const placeID = place.dataset.id;
        const placeSelected = document.querySelector(`#${placeID}`)
        allPlayers.forEach(player => {
            if (player.curentposetion == placeID) {
                const playerName = player.name.slice(0,7)
                if (player.position != "GK") {
                    placeSelected.innerHTML = `
                <h6 class="font-medium lg:-[30%] md:-mt-[35%] md:mb-3 lg:mb-1 sm:-mt-[40%] sm:mb-[0.6rem]">${playerName}</h6>
                        <div class="flex slg:mt-1 lg:-mt-2 md:-mt-2">
                            <img src="${player.photo}"
                                class="lg:w-16 -ml-4 lg:-mt-[0.7em] md:-mt-[0.9em] md:w-14 sm:-mt-[1.1em] ssm:w-12 ssm:ml-1 player  ">
                        </div>
                        <div>
                            <div class=" text-xs font-light slf" id="stats1">
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">pace:${player.pace}</p>
                                    <p class="font-normal" id="shooting">sho:${player.shooting}</p>
                                </div>
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">def:${player.defending}</p>
                                    <p class="font-normal" id="shooting">drib:${player.dribbling}</p>
                                </div>
                        </div>
                </div>
                `
                } else if (player.position == "GK") {
                    placeSelected.innerHTML = `
                    <h6 class="font-medium lg:-[30%] md:-mt-[35%] md:mb-3 lg:mb-1 sm:-mt-[40%] sm:mb-[0.6rem]">${player.name}</h6>
                        <div class="flex slg:mt-1 lg:-mt-2 md:-mt-2">
                            <img src="${player.photo}"
                                class="lg:w-16 -ml-4 lg:-mt-[0.7em] md:-mt-[0.9em] md:w-14 sm:-mt-[1.1em] ssm:w-12 ssm:ml-1 player  ">
                        </div>
                        <div>
                            <div class=" text-xs font-light slf" id="stats1">
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">pace:${player.pace}</p>
                                    <p class="font-normal" id="shooting">ref:${player.reflexes}</p>
                                </div>
                                <div class="flex">
                                    <p class="font-normal ml-[3px]" id="pace">def:${player.defending}</p>
                                    <p class="font-normal" id="shooting">drib:${player.dribbling}</p>
                                </div>
                            </div>
                        </div>
                    `
                }
            }
        })
    })
}
setTimeout(displayReservBench(), 300);
setTimeout(displayInPlace(), 300);