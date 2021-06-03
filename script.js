console.log("hello");
let userscore = 0;
let compscoer = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function comp_choice() {
    const choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * 3)];
}

function convertword(userinp) {
    switch (userinp) {
        case "r":
            return "rock";
        case "s":
            return "scissor";
        case "p":
            return "paper";
    }
}

function win(userinp) {
    userscore++;
    userScore_span.innerHTML = userscore;
    result_p.innerHTML = "You Win";
    console.log(userinp);
    document.getElementById(convertword(userinp)).classList.add('green-glow');
    setTimeout(() => {
        document.getElementById(convertword(userinp)).classList.remove('green-glow');
    }, 1000);
}


function lose(userinp) {
    compscoer++;
    compScore_span.innerHTML = compscoer;
    result_p.innerHTML = "loosu mahinesh nee thothuta";
    console.log(convertword(userinp));
    document.getElementById(convertword(userinp)).classList.add('red-glow');
    setTimeout(() => {
        document.getElementById(convertword(userinp)).classList.remove('red-glow');
    }, 1000);
}

function drraw(userinp) {
    result_p.innerHTML = "Tie";
    document.getElementById(convertword(userinp)).classList.add('grey-glow');
    setTimeout(() => {
        document.getElementById(convertword(userinp)).classList.remove('grey-glow');
    }, 1000);
}

function game(userinp) {
    const compinp = comp_choice();
    switch (userinp + compinp) {
        case "rs":
        case "pr":
        case "sp":
            win(userinp);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userinp);
            break;
        case "rr":
        case "pp":
        case "ss":
            drraw(userinp);
            break;
    }
}

function main() {

    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}
main();
