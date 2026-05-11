// Tracking the user's answers to the quiz questions
let answers = {q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, q8: null, q9: null, q10: null, q11: null, q12: null, q13: null};
let all_answered = false;

// Track the user's answers and update the counters
function counter(question, choice) {
    answers[question] = choice;
    // Reset the counters
    let R = 0, Y = 0, G = 0, B = 0;

    for (let color in answers) {
        if (answers[color] === 'R') R++;
        else if (answers[color] === 'Y') Y++;
        else if (answers[color] === 'G') G++;
        else if (answers[color] === 'B') B++;
    }

    document.getElementById("output").innerText = "R: " + R + " Y: " + Y + " G: " + G + " B: " + B;

    // Determine the user's results based on their highest color choices
    let top = Math.max(R, Y, G, B);
    let result = "";
    let desc = "";

    if (top === R) {
        result = "You are mostly Red!";
        desc = "You are a natural leader, confident, and driven. You thrive in competitive environments and are not afraid to take risks. You can be assertive and direct, but also have a strong sense of loyalty to those you care about.";
    } else if (top === Y) {
        result = "You are mostly Yellow!";
        desc = "You have a social and influential personality! You are outgoing, enthusiastic, and love being around people. You have a natural charisma that draws others to you, and you enjoy being the center of attention. You are optimistic and have a positive outlook on life.";
    } else if (top === G) {
        result = "You are a stable and reliable person. You are a good listener and are always there for your friends when they need you. You are patient and understanding, and you have a strong sense of empathy. You value harmony and stability in your relationships, and you are often the peacekeeper in your social circle.";
        desc = "You are a green green bean!";
    } else if (top === B) {
        result = "You are mostly Blue!";
        desc = "You are analytical and detail-oriented. You have a strong sense of logic and are often the voice of reason in your social circle. You are organized and methodical, and you take pride in doing things the right way. You can be perfectionistic at times, but you also have a deep appreciation for beauty and aesthetics.";
    } 

    // Set the results in localStorage (so they can be accessed on the results page)
    localStorage.setItem("result", result);
    localStorage.setItem("desc", desc);
}


function submit() {
    for (let answer in answers) {
        if (answers[answer] === null) {
            alert("Please answer all questions before submitting!!");
            return;
        }
    }
    // If they answered all questions, gp to the results page
    window.location.href = "results.html";
}
