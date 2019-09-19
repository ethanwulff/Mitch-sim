let dollars = 0;

let sadness = 0;

let button = document.getElementById("work");

let dollars = document.getElementById("dollars");

let mood = document.getElementById("mood");

let img = document.getElementById("ubereats");



// work event listener
button.addEventListener("click", function () {
    console.log("clicked");
    dollars++;
    mood -= 1;
    console.log(dollars);
    console.log(mood);
    dollars.innerHTML = "dollards: " + dollars;
    mood.innerHTML = "mood: " + mood;
});

// eats even listener
img.addEventListener("click", function () {
    if (dollars >= 5) {
        dollars -= 5;

        console.log("eats");

        console.log(dollars);
        dollars.innerHTML = "dollards: " + dollars;
    }
}); 