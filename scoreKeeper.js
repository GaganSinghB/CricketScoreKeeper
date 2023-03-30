let Team_01 = localStorage.getItem("team_01");
let Team_02 = localStorage.getItem("team_02");

let Team_01_Score = document.querySelector('#Team_01_Score');
let Team_02_Score = document.querySelector('#Team_02_Score');
let Team_01_Wicket = document.querySelector('#Team_01_Wicket');
let Team_02_Wicket = document.querySelector('#Team_02_Wicket');

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let six = document.querySelector('#six');
let dot = document.querySelector('#dot');
let wic = document.querySelector('#wic');

let buttonText = document.querySelector('.buttonText');

let b = 30;
let startM = document.querySelector('.start');


/* --------------------------------------------------------------------------------------------------------------- */


document.title = Team_01.toUpperCase() + ' vs ' + Team_02.toUpperCase();
document.getElementById("Team_01").innerHTML = Team_01 + ':';
document.getElementById("Team_02").innerHTML = Team_02 + ':';


/* --------------------------------------------------------------------------------------------------------------- */


startM.addEventListener('click', play);


/* --------------------------------------------------------------------------------------------------------------- */


document.querySelector(".start").onclick = function()
{
    document.querySelector("link[href='./Buttons/startButton.css']").href = "./Buttons/resetButton.css";
}    


/* --------------------------------------------------------------------------------------------------------------- */


function play() {
    if (buttonText.innerText == "START MATCH") {
        document.querySelector('#balls').textContent = b;
        document.querySelector('#text').textContent = ' BALLS LEFT';
        document.querySelector('#status').textContent = Team_01 + ' IS PLAYING';
        buttonText.innerText = "RESET";
        game1();
    }
    else if (buttonText.innerText == "RESET") {
        location.reload();
    }
}


function game1() {
    one.addEventListener('click', function () {
        updateScore1(1)
    })
    two.addEventListener('click', function () {
        updateScore1(2)
    })
    three.addEventListener('click', function () {
        updateScore1(3)
    })
    four.addEventListener('click', function () {
        updateScore1(4)
    })
    six.addEventListener('click', function () {
        updateScore1(6)
    })
    dot.addEventListener('click', function () {
        updateScore1(0)
    })
    wic.addEventListener('click', function () {
        updateScore1(-1)
    })
}


function updateScore1(s) {
    if (document.querySelector('#status').textContent == (Team_01 + ' IS PLAYING') && buttonText.innerText == "RESET") {
        if (s > -1) {
            let x = Number(Team_01_Score.textContent);
            x = x + s;
            Team_01_Score.textContent = x;
            let balls = Number(document.querySelector('#balls').textContent);
            balls = balls - 1;
            if (balls >= 2)
                document.querySelector('#balls').textContent = balls;
            else if (balls == 1) {
                document.querySelector('#balls').textContent = balls;
                document.querySelector('#text').textContent = ' Ball Left';
            }
            else {
                play2();
            }
        }
        else {
            let w = (-1) * Number(Team_01_Wicket.textContent);
            w = w + s;
            if (w != -10) {
                Team_01_Wicket.textContent = (-1) * w;
                let balls = Number(document.querySelector('#balls').textContent);
                balls = balls - 1;
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
                else {
                    play2();
                }
            }
            else {
                Team_01_Wicket.textContent = (-1) * w;
                play2();
            }
        }
    }
}


/* --------------------------------------------------------------------------------------------------------------- */


function play2() {
    document.querySelector('#balls').textContent = b;
    document.querySelector('#text').textContent = ' Balls Left';
    document.querySelector('#status').textContent = Team_02 + ' IS PLAYING';
    game2();
}


function game2() {
    one.addEventListener('click', function () {
        updateScore2(1)
    })
    two.addEventListener('click', function () {
        updateScore2(2)
    })
    three.addEventListener('click', function () {
        updateScore2(3)
    })
    four.addEventListener('click', function () {
        updateScore2(4)
    })
    six.addEventListener('click', function () {
        updateScore2(6)
    })
    dot.addEventListener('click', function () {
        updateScore2(0)
    })
    wic.addEventListener('click', function () {
        updateScore2(-1)
    })
}


function updateScore2(s) {
    if (document.querySelector('#status').textContent == (Team_02 + ' IS PLAYING') && buttonText.innerText == "RESET") {
        if (s > -1) {
            let x = Number(Team_01_Score.textContent);
            let y = Number(Team_02_Score.textContent);
            y = y + s;
            Team_02_Score.textContent = y;
            let balls = Number(document.querySelector('#balls').textContent);
            balls = balls - 1;
            if (y <= x) {
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
            }
            else {
                if(balls == 0){
                    if (y < x) {
                        document.querySelector('#balls').textContent = '';
                        document.querySelector('#text').textContent = 'MATCH IS OVER';
                        document.querySelector('#status').textContent = Team_01 + ' WON';
                        document.querySelector("#status").style.color = '#2255a4' 
                    }
                    else if (y == x) {
                        document.querySelector('#balls').textContent = '';
                        document.querySelector('#text').textContent = 'MATCH IS OVER';
                        document.querySelector('#status').textContent = 'TIE MATCH';
                        document.querySelector("#status").style.color = 'yellow'
                    }
                }
                else {
                    document.querySelector('#balls').textContent = '';
                    document.querySelector('#text').textContent = 'MATCH IS OVER';
                    document.querySelector('#status').textContent = Team_02 + ' WON';
                    document.querySelector("#status").style.color = '#006629'
                }

            }
        }
        else {
            let w = (-1) * Number(Team_02_Wicket.textContent);
            w = w + s;
            if (w != -10) {
                Team_02_Wicket.textContent = (-1) * w;
                let balls = Number(document.querySelector('#balls').textContent);
                balls = balls - 1;
                if (balls >= 2)
                    document.querySelector('#balls').textContent = balls;
                else if (balls == 1) {
                    document.querySelector('#balls').textContent = balls;
                    document.querySelector('#text').textContent = ' Ball Left';
                }
            }
            else {
                Team_02_Wicket.textContent = (-1) * w;
                let x = Number(Team_01_Score.textContent);
                let y = Number(Team_02_Score.textContent);
                if (y < x) {
                    document.querySelector('#balls').textContent = '';
                    document.querySelector('#text').textContent = 'MATCH IS OVER';
                    document.querySelector('#status').textContent = Team_01 + ' WON';
                    document.querySelector("#status").style.color = '#2255a4'
                }
                else if (y == x) {
                    document.querySelector('#balls').textContent = '';
                    document.querySelector('#text').textContent = 'MATCH IS OVER';
                    document.querySelector('#status').textContent = 'TIE MATCH';
                    document.querySelector("#status").style.color = 'yellow'
                }
            }
        }
    }
}