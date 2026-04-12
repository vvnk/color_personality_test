// Initializing counters for each color (Red, Yellow, Green, Blue)
let answers = {q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null, q9: null, q10: null, q11: null, q12: null, q13: null};

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