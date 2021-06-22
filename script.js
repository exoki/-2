let finish = false;
let secretNumber = getRandomInt(1, 10);
let attempts = 3;
document.querySelector(".content").onclick = function () {
    let target = event.target;
    if (target.classList.contains("number")) {
        let userNumber = target.innerHTML;
        let hint = document.querySelector(".hint");
        check(userNumber, hint);
    }
}
document.querySelector(".new").onclick = function () {
    attempts = 3;
    secretNumber = getRandomInt(1,10);
    finish = false;
    document.querySelector(".hint").innerHTML = "Подсказки";
    document.querySelector(".attempts_number").innerHTML = attempts;
    document.querySelector(".new").onmouseover = function () {
        document.querySelector(".new").style.backgroundColor = "#8f9fff";
    }
    document.querySelector(".new").onmouseout = function () {
        document.querySelector(".new").style.backgroundColor = "#6f7fdf";
    }
    document.querySelector(".hint").style.backgroundColor = "#2b3b9b";
}

function check(userNumber, hint) {
    if (!finish) {
        if (userNumber < secretNumber) {
            hint.innerHTML = "Попробуй число побольше";
            attempts = attempts - 1;
        }
        if (userNumber > secretNumber) {
            hint.innerHTML = "Попробуй число поменьше";
            attempts = attempts - 1;
        }
        if (userNumber == secretNumber) {
            hint.innerHTML = "Ты угадал!";
            finish = true;
            document.querySelector(".new").style.backgroundColor = "#7EB77F";
            document.querySelector(".hint").style.backgroundColor = "#7EB77F";
        }
        document.querySelector(".attempts_number").innerHTML = attempts;
        if (attempts == 0) {
            finish = true;
            document.querySelector(".new").style.backgroundColor = "#f44336";
            document.querySelector(".hint").style.backgroundColor = "#f44336";
            document.querySelector(".hint").innerHTML = "Ты проиграл"
        }
    }
}

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
