// Initializing counters for each color (Red, Yellow, Green, Blue)
let answers = {q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null, q9: null, q10: null, q11: null, q12: null, q13: null};

// Track the user's answers and update the counters
function counter(question, choice) {
    answers[question] = choice;
    let R = 0, Y = 0, G = 0, B = 0;

    for (let color in answers) {
        if (answers[color] === 'R') R++;
        else if (answers[color] === 'Y') Y++;
        else if (answers[color] === 'G') G++;
        else if (answers[color] === 'B') B++;
    }
    console.log("function ran");
    document.getElementById("output").innerText =
    "R: " + R + " Y: " + Y + " G: " + G + " B: " + B;
}

// Determine the user's results based on their highest color choices
let top = Math.max(R, Y, G, B);
let result = "";
let desc = "";

if (top === R) {
    result = "You are mostly Red!";
    desc = "You are a natural leader, confident, and driven. You thrive in competitive environments and are not afraid to take risks. You can be assertive and direct, but also have a strong sense of loyalty to those you care about.";
} else if (top === Y) {
    result = "You are mostly Yellow!";
    desc = "You are a very happy person!";
} else if (top === G) {
    result = "You are mostly Green!";
    desc = "You are a green green bean!";
} else if (top === B) {
    result = "You are mostly Blue!";
    desc = "Wow you are so blue";
} 

// Set the results in localStorage (so they can be accessed on the results page)
localStorage.setItem("result", result);
localStorage.setItem("description", desc);