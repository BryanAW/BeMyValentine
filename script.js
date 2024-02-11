var hoverCount = 0;
var addedPhrase = false;

var phrases = [
    "Uh...was that a mistake?",
    "Are you sure!????",
    "You can't be serious :(",
    "FINE!!!!",
    "You have no choice now punk"
];
function moveNoButton() {
    // Get the button and container elements
    var button = document.getElementById("noButton");
    var container = document.querySelector(".container");
    var content = document.querySelector(".content");
    var gif = document.querySelector(".gif");
    var yesButton = document.getElementById("yesButton");

    // Get the button and container's rect
    var containerRect = container.getBoundingClientRect();
    var contentRect = content.getBoundingClientRect();
    var gifRect = gif.getBoundingClientRect();
    var yesButtonRect = yesButton.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();

    // Calculate the max X and Y
    var maxX = containerRect.width - buttonRect.width;
    var maxY = containerRect.height - buttonRect.height;

    // Generate a random X and Y (initialize)
    var randomX, randomY;

    // Check if the button is colliding with the content, GIF, or Yes button
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (isColliding(randomX, randomY, buttonRect, contentRect, gifRect, yesButtonRect));

    hoverCount++;
    // Change GIF and phrase if the button is moved once
    if (hoverCount === 1 && !addedPhrase) {
        document.getElementById("mainImg").src = "https://i.pinimg.com/originals/f9/35/cc/f935cc35d211638a85650795297bf13a.gif";
        // Make a paragraph beneath the header to display the first phrase (only once)
        var p = document.createElement("p");
        p.innerHTML = phrases[0];
        p.style.fontSize = "20px";
        document.getElementById("mainTxt").appendChild(p);
        addedPhrase = true;
    }
    // Change GIF and phrase if the button is moved three times
    if (hoverCount === 3) {
        document.getElementById("mainImg").src = "https://i.pinimg.com/originals/e4/8b/19/e48b194083622deba99454f55cf1a781.gif";
        document.querySelector("#mainTxt p").innerHTML = phrases[1];
    }
    // Change GIF and phrase if the button is moved five times
    if (hoverCount === 5) {
        document.getElementById("mainImg").src = "https://gifdb.com/images/high/sobbing-mochi-peach-sad-cat-crying-159nsavir4aye3va.gif";
        document.querySelector("#mainTxt p").innerHTML = phrases[2];
    }
    // Change GIF and phrase if the button is moved SEVEN times
    if (hoverCount === 7) {
        document.getElementById("mainImg").src = "https://media.tenor.com/zcw-ouHZPqMAAAAi/mochi-cat-chibi-cat.gif";
        document.querySelector("#mainTxt p").innerHTML = phrases[3];
    }
    // Remove no button if it's moved 10 times
    if (hoverCount === 10) {
        button.style.display = "none";
        document.querySelector("#mainTxt p").innerHTML = phrases[4];
        yesButton.classList.add("glowing");
    }

    // Set the button's position
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Check if the button is colliding with the content, GIF, or Yes button
function isColliding(x, y, buttonRect, contentRect, gifRect, yesButtonRect) {
    // Checks if the position collides with the content area
    if (
        x < contentRect.right &&
        x + buttonRect.width > contentRect.left &&
        y < contentRect.bottom &&
        y + buttonRect.height > contentRect.top
    ) {
        return true; // Colliding with content
    }
    // Checks if the position collides with the GIF area
    if (
        x < gifRect.right &&
        x + buttonRect.width > gifRect.left &&
        y < gifRect.bottom &&
        y + buttonRect.height > gifRect.top
    ) {
        return true; // Colliding with GIF
    }
    // Checks if the position collides with the Yes button area
    return x < yesButtonRect.right &&
        x + buttonRect.width > yesButtonRect.left &&
        y < yesButtonRect.bottom &&
        y + buttonRect.height > yesButtonRect.top;

     // Not colliding
}

function yes() {
    // Change the GIF
    document.getElementById("mainImg").src = "https://media1.tenor.com/m/0_6RNy6eYZcAAAAC/yay-mochi.gif";
    document.getElementById("mainTxt").innerHTML = "YAY!!! I love you";

    // Hide the buttons
    document.querySelector(".buttons").style.display = "none";
}

document.getElementById("noButton").addEventListener("click", moveNoButton);
