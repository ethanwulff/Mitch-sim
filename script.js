let dollars = 0;

let sadness = 0;

let mood = 10;

let button = document.getElementById("work");

let dollarsDiv = document.getElementById("dollars");

let moodDiv = document.getElementById("mood");

let img = document.getElementById("ubereats");

let endgameDiv = document.getElementById("endgame");

// work event listener
button.addEventListener("click", function () {
    dollars++;
    mood--;
    updateDivs();
});

// eats even listener
img.addEventListener("click", function () {
    dollars -= 5;
    mood += 5;
    updateDivs();
});

function updateDivs() {
    dollarsDiv.innerHTML = "dollards: " + dollars;
    moodDiv.innerHTML = "mood: " + mood;
    endGame();
}

function endGame() {
    if (dollars < 0) {
        for (let i = 0; i < 1000; i++) {
            let h1 = document.createElement("h1");
            let text = document.createTextNode("DEBT COLLECTORS EAT YOUR ASS");
            h1.append(text);
            endgameDiv.appendChild(h1);
        }
    } else if (mood < 0) {
        for (let i = 0; i < 1000; i++) {
            let h1 = document.createElement("h1");
            let text = document.createTextNode("YOU ARE TOO DEPRESSED TO LIVE");
            h1.append(text);
            endgameDiv.appendChild(h1);
        }
    }
}