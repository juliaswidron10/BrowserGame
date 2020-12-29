window.addEventListener("load", userStart);
let points = 10;
let currentTime = 0;
let gettingPointSound = document.querySelector("#getting_point_sound");
let losingPointRaccoonSound = document.querySelector("#loosing_point_sound");
let backgroundMusic = document.querySelector("#background_music");
let gameOverSound = document.querySelector("#game_over_sound");
//let loosingPointYahooSound = document.querySelector("#loosing_point_yahoo");
//document.querySelector("#welcome").addEventListener("click", start);
//    backgroundMusic.play();
function userStart() {
    document.querySelector("#welcome").addEventListener("click", start);
    countingSeconds();
}

function countingSeconds() {
    currentTime++;
    let date = new Date(0);
    date.setSeconds(currentTime);
    let timeString = date.toISOString().substr(17,2);
    document.querySelector("#timer").textContent = timeString;
    if (currentTime == 30){
        gameOver();
    }
}

function restartGame() {
    document.querySelector("#try_again").removeEventListener("click", restartGame);
    document.querySelector("#game_over").classList.remove("visible");
    document.querySelector("#bad_heart_container1").classList.remove("paused");
    document.querySelector("#bad_heart_container2").classList.remove("paused");
    document.querySelector("#bad_heart_container3").classList.remove("paused");
    document.querySelector("#bad_heart_container4").classList.remove("paused");
    document.querySelector("#bad_heart_container5").classList.remove("paused");
    document.querySelector("#good_heart_container1").classList.remove("paused");
    document.querySelector("#good_heart_container2").classList.remove("paused");
    document.querySelector("#good_heart_container3").classList.remove("paused");
    document.querySelector("#good_heart_container4").classList.remove("paused");
    document.querySelector("#good_heart_container5").classList.remove("paused");
    backgroundMusic.removeEventListener("ended", musicPlay);
    points = 10;
    currentTime = 0;
    start();
}

function start() {
    console.log("start");
    let second = setInterval(countingSeconds, 1000);
    musicPlay();
    backgroundMusic.addEventListener("ended", musicPlay);
    document.querySelector("#welcome").classList.add("invisible");
    document.querySelector("#welcome").removeEventListener("click", start);
    document.querySelector("#yahoo").classList.add("sad_yahoo");
    document.querySelector("#coonie").classList.add("sad_coonie");
    document.querySelector("#progress_bar").classList.add("progress_at_" + (points / 5));
    document.querySelector("#score").textContent = "Score:" + points;
    document.querySelector("#bad_heart_container1").classList.add("falling", "position1", "speed1");
    document.querySelector("#bad_heart_container2").classList.add("falling", "position2", "speed2");
    document.querySelector("#bad_heart_container3").classList.add("falling", "position3", "speed3");
    document.querySelector("#bad_heart_container4").classList.add("falling", "position4", "speed4");
    document.querySelector("#bad_heart_container5").classList.add("falling", "position2", "speed5");
    document.querySelector("#good_heart_container1").classList.add("falling", "position1", "speed6");
    document.querySelector("#good_heart_container2").classList.add("falling", "position2", "speed7");
    document.querySelector("#good_heart_container3").classList.add("falling", "position3", "speed1");
    document.querySelector("#good_heart_container4").classList.add("falling", "position4", "speed4");
    document.querySelector("#good_heart_container5").classList.add("falling", "position4", "speed5");


    document.querySelector("#bad_heart_container1").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#bad_heart_container1").addEventListener("click", badHeartClicked);


    document.querySelector("#bad_heart_container2").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#bad_heart_container2").addEventListener("click", badHeartClicked);


    document.querySelector("#bad_heart_container3").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#bad_heart_container3").addEventListener("click", badHeartClicked);


    document.querySelector("#bad_heart_container4").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#bad_heart_container4").addEventListener("click", badHeartClicked);


    document.querySelector("#bad_heart_container5").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#bad_heart_container5").addEventListener("click", badHeartClicked);


    document.querySelector("#good_heart_container1").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#good_heart_container1").addEventListener("click", goodHeartClicked);
    document.querySelector("#good_heart_container1").addEventListener("animationiteration",
        subtractPoints);


    document.querySelector("#good_heart_container2").addEventListener("animationiteration", reachBottom);
    document.querySelector("#good_heart_container2").addEventListener("click", goodHeartClicked);
    document.querySelector("#good_heart_container2").addEventListener("animationiteration",
        subtractPoints);


    document.querySelector("#good_heart_container3").addEventListener("animationiteration", reachBottom);
    document.querySelector("#good_heart_container3").addEventListener("click", goodHeartClicked);
    document.querySelector("#good_heart_container3").addEventListener("animationiteration",
        subtractPoints);


    document.querySelector("#good_heart_container4").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#good_heart_container4").addEventListener("click", goodHeartClicked);
    document.querySelector("#good_heart_container4").addEventListener("animationiteration",
        subtractPoints);


    document.querySelector("#good_heart_container5").addEventListener("animationiteration",
        reachBottom);
    document.querySelector("#good_heart_container5").addEventListener("click", goodHeartClicked);
    document.querySelector("#good_heart_container5").addEventListener("animationiteration",
        subtractPoints);
}

function musicPlay() {
    backgroundMusic.play();
    backgroundMusic.removeEventListener("ended", musicPlay);
}

function reachBottom() {
    console.log("random Position");
    let heart = this;
    heart.classList.remove("position1");
    heart.classList.remove("position2");
    heart.classList.remove("position3");
    heart.classList.remove("position4");

    let position = Math.floor((Math.random() * 4) + 1);
    heart.classList.add("position" + position);
}

function badHeartClicked() {
    console.log("Bad heart clicked");
    let heart = this;
    heart.classList.add("paused");
    heart.querySelector(".bad_heart_sprite").classList.add("break");
    heart.removeEventListener("click", badHeartClicked);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    subtractPoints();
    heart.addEventListener("animationend", badHeartReset);
    losingPointRaccoonSound.currentTime = 0;
    losingPointRaccoonSound.play();
}

function badHeartReset() {
    console.log("Bad heart reset");
    let heart = this;
    heart.classList.remove("paused", "falling");
    heart.querySelector(".bad_heart_sprite").classList.remove("break");
    heart.addEventListener("click", badHeartClicked);
    heart.offsetHeight;
    heart.classList.add("falling");
    heart.removeEventListener("animationend", badHeartReset);

}

function goodHeartClicked() {
    console.log("Good Heart Clicked");
    let heart = this;
    heart.classList.add("paused");
    heart.querySelector(".good_heart_sprite").classList.add("disappear");
    heart.removeEventListener("click", goodHeartClicked);
    heart.addEventListener("animationend", goodHeartRestart);
    addPoints();

}

function goodHeartRestart() {
    console.log("Good Heart Restart");
    let heart = this;
    heart.classList.remove("paused", "falling");
    heart.querySelector(".good_heart_sprite").classList.remove("disappear");
    heart.offsetHeight;
    heart.removeEventListener("animationend", goodHeartRestart);
    heart.classList.add("falling");
    heart.addEventListener("click", goodHeartClicked);
}
function updateProgressBar(){
    document.querySelector("#progress_bar").classList.remove("progress_at_" + ((points / 5) - 1));
    document.querySelector("#progress_bar").classList.add("progress_at_" + (points / 5));
}

function subtractPoints() {
    console.log("Subtract points");
    points--;
    console.log("Score:" + points);
    updateProgressBar();
    document.querySelector("#score").textContent = "Score:" + points;
    if (points < 20) {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("sad_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("sad_coonie");
    } else if (points < 40) {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("neutral_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("neutral_coonie");
    } else {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("happy_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("happy_coonie");
    }
    if (points < 0) {
        gameOver();
    }
}

function addPoints() {
    console.log("Add points");
    points++;
    gettingPointSound.currentTime = 0;
    gettingPointSound.play();
    console.log("Score:" + points);
    updateProgressBar();
    document.querySelector("#score").textContent = "Score:" + points;
    if (points < 20) {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("sad_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("sad_coonie");
    } else if (points < 40) {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("neutral_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("neutral_coonie");
    } else {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("happy_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("happy_coonie");
    }
    if (points >= 50) {
        document.querySelector("#progress_bar").classList.add("progres_at_10");
    }
    if (points < 0) {
        gameOver();
    }
}

function gameOver() {
    console.log("Game Over");
    gameOverSound.play();
    document.querySelector("#game_over").classList.add("visible");
    document.querySelector("#bad_heart_container1").classList.add("paused");
    document.querySelector("#bad_heart_container2").classList.add("paused");
    document.querySelector("#bad_heart_container3").classList.add("paused");
    document.querySelector("#bad_heart_container4").classList.add("paused");
    document.querySelector("#bad_heart_container5").classList.add("paused");
    document.querySelector("#good_heart_container1").classList.add("paused");
    document.querySelector("#good_heart_container2").classList.add("paused");
    document.querySelector("#good_heart_container3").classList.add("paused");
    document.querySelector("#good_heart_container4").classList.add("paused");
    document.querySelector("#good_heart_container5").classList.add("paused");
    document.querySelector("#try_again").addEventListener("click", restartGame);
    backgroundMusic.addEventListener("ended", musicPlay);
    backgroundMusic.pause();
}
