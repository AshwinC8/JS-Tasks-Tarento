//scores as global variable so every function can have access
var score1 = 0
var score2 = 0

//click event on start
var start_button = document.getElementById("start-button");
start_button.addEventListener("click", start_game);


async function fetchTeamNames(){
    try {
        const response = await fetch("./team-data.json");
        const teams = await response.json();

        //setting those names
        document.getElementById("team-1-name").innerHTML = teams.team1;
        document.getElementById("team-2-name").innerHTML = teams.team2;
    } catch(err) {
        console.log("Error fetching team data\n" + err);
    }
}


//To determine and display click event
function displayResult(){
    if( score1 > score2 ){
        var winner = document.getElementById("team-1-name").innerHTML;
        document.getElementById("result").innerHTML = "The Winner is Team : " + winner;
    } else if ( score1 < score2) {
        winner = document.getElementById("team-2-name").innerHTML
        document.getElementById("result").innerHTML = "The Winner is Team : " + winner;
    } else {
        document.getElementById("result").innerHTML = "Draw";
    }
}


//timer calculations and function which stops key inputs once timer out 
async function startTimerDisplay(time, body, button) {
    time = time/1000; //convert to seconds
    
    var timer = setInterval( () => { 
        time = time-1; 
        var display = document.getElementById("timer-display");
        display.innerHTML = "00:" + time;

        if(time==0){
            clearInterval(timer);
            body.removeEventListener("keydown", gameEvent);
            displayResult();
            button.disable = false;
            setTimeout( () => {
                display.innerHTML = "00:30"
                document.getElementById("team-1-score").innerHTML = "00";
                document.getElementById("team-2-score").innerHTML = "00";
            }, 8000)
        }
    },1000);
}

//how key presses determine the score
function gameEvent(event) {
    // console.log(event)
    if( event.code == "KeyA") {
        score1++;
        document.getElementById("team-1-score").innerHTML = score1;
        document.getElementById("team-1-basket").play();
    }

    if( event.code == "KeyL") {
        score2++;
        document.getElementById("team-2-score").innerHTML = score2;
        document.getElementById("team-2-basket").play();
    }    
}


function start_game() {
    var button = document.getElementById("start-button");

    //disable start game button
    button.disable = true;
    score1 = 0
    score2 = 0
    var timer_time = 30000;

    //attach keydown event to body 
    var body = document.getElementById("whole-body");
    body.addEventListener("keydown", gameEvent);
    
    startTimerDisplay(timer_time, body, button);
}

//to fetch names
fetchTeamNames();


