// Initializing counters for each color (Red, Yellow, Green, Blue)
let R = 0;
let Y = 0;
let G = 0;
let B = 0;

function counter(color) {
    if (color === 'R') {
        R++;
    } else if (color === 'Y') {
        Y++;
    } else if (color === 'G') {
        G++;
    } else if (color === 'B') {
        B++;
    }
    
    document.getElementById("output").innerText =
    "R: " + R + " | Y: " + Y + " | G: " + G + " | B: " + B;
}