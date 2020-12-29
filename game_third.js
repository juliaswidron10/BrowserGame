window.addEventListener("load", userStart);
//creating varialbles
let points = 0;
let timeLeft = 30;
let gettingPointSound = document.querySelector("#getting_point_sound");
let losingPointRaccoonSound = document.querySelector("#loosing_point_sound");
let levelCompleteSound = document.querySelector("#level_complete_sound");
let backgroundMusic = document.querySelector("#background_music");
let gameOverSound = document.querySelector("#game_over_sound");
//let progressBar = document.querySelector("#progress_bar");
let gameOn = true;
let muted = false;

let smalltimeLeft = 3;
//let backgroundMusicPlay = true;

//counting Time
function startTimer() {
    if (timeLeft == 0) {
        gameEnded();
    } else {
        gameOn = true;
        setTimeout(printTime, 1000);
    }
}

function printTime() {
    if (gameOn == true) {
        timeLeft--;
        console.log("Time" + timeLeft);
        startTimer();
        document.querySelector("#seconds").textContent = timeLeft;
    } else {
        gameOn = false;
    }
}
//user starts the game
function userStart() {
    document.querySelector("#home").removeEventListener("click", userStart);
    document.querySelector("#welcome").classList.remove("hide");
    document.querySelector("#welcome").addEventListener("click", scene1tr);
}

function scene1tr() {
    document.querySelector("#welcome").classList.add("slideleft");
    document.querySelector("#scene1").classList.remove("hide");

    document.querySelector("#welcome").removeEventListener("click", scene1tr);
    document.querySelector("#welcome").addEventListener("animationend", scene1);
}

function scene1() {
    document.querySelector("#welcome").classList.add("hide");
    document.querySelector("#welcome").addEventListener("animationend", scene1);


    document.querySelector("#scene1 .next_button").addEventListener("click", scene2tr);
    document.querySelector("#scene1 .skip_button").addEventListener("click", countdown);
}

function scene2tr() {
    document.querySelector("#scene1").classList.add("slideleft");
    document.querySelector("#scene2").classList.remove("hide");

    document.querySelector("#scene1").removeEventListener("click", scene2tr);
    document.querySelector("#scene1").addEventListener("animationend", scene2);
}

function scene2() {
    document.querySelector("#scene1").classList.add("hide");
    document.querySelector("#scene1").removeEventListener("animationend", scene2);


    document.querySelector("#scene2 .next_button").addEventListener("click", instructiontr);
    document.querySelector("#scene2 .skip_button").addEventListener("click", countdown);
}

function instructiontr() {
    document.querySelector("#scene2").classList.add("slideleft");
    document.querySelector("#instructions").classList.remove("hide");

    document.querySelector("#scene2 .next_button").removeEventListener("click", instructiontr);
    document.querySelector("#scene2").addEventListener("animationend", instruction);
}

function instruction() {
    document.querySelector("#scene2").classList.add("hide");
    document.querySelector("#scene2").removeEventListener("animationend", instruction);

    document.querySelector("#instructions .next_button").addEventListener("click", countdown);
}

function smallprintTime() {
    if (timeLeft > 0) {
        smalltimeLeft--;
        countdown();
        document.querySelector("#countdown .secs").textContent = smalltimeLeft;
    }
}

function countdown() {
    document.querySelector("#instructions .next_button").removeEventListener("click", countdown);
    document.querySelector("#scene2 .skip_button").removeEventListener("click", countdown);
    document.querySelector("#scene1 .skip_button").removeEventListener("click", countdown);
    document.querySelector("#instructions").classList.add("slideleft");
    document.querySelector("#welcome").classList.add("slideleft");
    document.querySelector("#scene1").classList.add("slideleft");
    document.querySelector("#scene2").classList.add("slideleft");

    document.querySelector("#countdown").classList.remove("hide");
    if (smalltimeLeft == 0) {
        document.querySelector("#countdown").classList.add("invisible");
        document.querySelector("#countdown").classList.add("hide");
        unpauseGame();
        start();
    } else {
        setTimeout(smallprintTime, 500);
        document.querySelector("#countdown .secs").textContent = smalltimeLeft;
    }

}

function start() {
    if (gameOn == true) {
        // setting timer
        //starting music
        document.querySelector("#scene1").classList.add("hide");
        document.querySelector("#scene2").classList.add("hide");
        document.querySelector("#instructions").classList.add("hide");
        restartScreens();

        document.querySelector("#scene1 .skip_button").removeEventListener("click", start);
        document.querySelector("#scene2 .skip_button").removeEventListener("click", start);
        console.log("start");
        gameOn = true;
        musicPlay();
        startTimer();
        backgroundMusic.addEventListener("ended", musicPlay);
        document.querySelector("#pause").addEventListener("click", pauseGamebtn);
        document.querySelector("#settings").addEventListener("click", settings);

        document.querySelector("#scored").textContent = "Score:" + points;
        //hearts falling animation, first position, speed
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
        //eventListeners for iteration and click BAD HEARTS
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
        //eventListeners for iteration and click GOOD HEARTS
        document.querySelector("#good_heart_container1").addEventListener("animationiteration",
            reachBottom);
        document.querySelector("#good_heart_container1").addEventListener("click", goodHeartClicked);
        document.querySelector("#good_heart_container2").addEventListener("animationiteration", reachBottom);
        document.querySelector("#good_heart_container2").addEventListener("click", goodHeartClicked);
        document.querySelector("#good_heart_container3").addEventListener("animationiteration", reachBottom);
        document.querySelector("#good_heart_container3").addEventListener("click", goodHeartClicked);
        document.querySelector("#good_heart_container4").addEventListener("animationiteration",
            reachBottom);
        document.querySelector("#good_heart_container4").addEventListener("click", goodHeartClicked);
        document.querySelector("#good_heart_container5").addEventListener("animationiteration",
            reachBottom);
        document.querySelector("#good_heart_container5").addEventListener("click", goodHeartClicked);
        //subtract point for GOODHEART reaching bottom
        document.querySelector("#good_heart_container1").addEventListener("animationiteration",
            subtractPoints);
        document.querySelector("#good_heart_container2").addEventListener("animationiteration",
            subtractPoints);
        document.querySelector("#good_heart_container3").addEventListener("animationiteration",
            subtractPoints);
        document.querySelector("#good_heart_container4").addEventListener("animationiteration",
            subtractPoints);
        document.querySelector("#good_heart_container5").addEventListener("animationiteration",
            subtractPoints);
    } else {
        pauseGame();
    }
}

function settings() {
    document.querySelector("#settings").removeEventListener("click", settings);
    console.log("settings");
    pauseGame();
    document.querySelector("#settingscreen").classList.remove("hide");
    document.querySelector("#mute_sound").addEventListener("click", muteSound);
    document.querySelector("#mute_music").addEventListener("click", muteMusic);
    document.querySelector("#home").addEventListener("click", homeBtn);
    document.querySelector("#restart_icon").addEventListener("click", restartGame);
    document.querySelector("#close").addEventListener("click", closeSettings);
}

function homeBtn() {
    console.log("Home");
    window.location.reload(true);
}

function closeSettings() {
    document.querySelector("#close").removeEventListener("click", closeSettings);
    if (!muted) {
        gettingPointSound.play();
    }
    console.log("close Settings");
    document.querySelector("#settingscreen").classList.add("hide");
    unpauseGame();
    musicPlay();
    start();
}

function muteSound() {
    console.log("Mute Sounds");
    if (!muted) {
        gettingPointSound.play();
    }
    if (muted == false) {
        muted = true;
        document.querySelector("#mute_sound").classList.remove("unmute");
        document.querySelector("#mute_sound").classList.add("mute");
    } else {
        muted = false;
        document.querySelector("#mute_sound").classList.remove("mute");
        document.querySelector("#mute_sound").classList.add("unmute");

    }
}

function muteMusic() {
    console.log("mute Music");
    if (!muted) {
        gettingPointSound.play();
    }
    if (backgroundMusic.muted == false) {
        document.querySelector("#mute_music").classList.remove("muted_music");
        document.querySelector("#mute_music").classList.add("unmute_music");
        backgroundMusic.muted = true;
    } else {
        document.querySelector("#mute_music").classList.remove("unmute_music");
        document.querySelector("#mute_music").classList.add("muted_music");
        backgroundMusic.muted = false;
    }
}

function musicPlay() {
    console.log("musicPlay");
    backgroundMusic.play();
    if (gameOn == true) {
        backgroundMusic.play();
        backgroundMusic.addEventListener("ended", musicPlay);
    } else {
        backgroundMusic.pause();
    }
}
//heart reaches bottom
function reachBottom() {
    console.log("random Position");
    let heart = this;
    //removing previous classes;
    heart.classList.remove("position1");
    heart.classList.remove("position2");
    heart.classList.remove("position3");
    heart.classList.remove("position4");
    //adding random position class
    let position = Math.floor((Math.random() * 4) + 1);
    heart.classList.add("position" + position);
}
//BADHEART clicked
function badHeartClicked() {
    console.log("Bad heart clicked");
    if (gameOn == true) {
        let heart = this;
        //add paused falling and break animation
        heart.classList.add("paused");
        heart.querySelector(".bad_heart_sprite").classList.add("break");
        //subtrackt points and play sound
        heart.removeEventListener("click", badHeartClicked);
        subtractPoints();
        heart.addEventListener("animationend", badHeartReset);
        losingPointRaccoonSound.currentTime = 0;
        if (!muted) {
            losingPointRaccoonSound.play();
        }
    }
}
//BAD HEART restart
function badHeartReset() {
    console.log("Bad heart reset");
    let heart = this;
    //remove paused falling and break animation
    heart.classList.remove("paused", "falling");
    heart.querySelector(".bad_heart_sprite").classList.remove("break");
    //restarting to top position and adding fall animation
    heart.addEventListener("click", badHeartClicked);
    heart.offsetHeight;
    heart.classList.add("falling");
    heart.removeEventListener("animationend", badHeartReset);
}
//GOOD HEART clicked
function goodHeartClicked() {
    console.log("Good Heart Clicked");
    if (gameOn == true) {
        let heart = this;
        //add paused falling and disappear animation
        heart.classList.add("paused");
        heart.querySelector(".good_heart_sprite").classList.add("disappear");
        //add points and play sound
        heart.removeEventListener("click", goodHeartClicked);
        heart.addEventListener("animationend", goodHeartRestart);
        addPoints();
        gettingPointSound.currentTime = 0;
        if (!muted) {
            gettingPointSound.play();
        }
    }

}
//GOOD HEART restart
function goodHeartRestart() {
    console.log("Good Heart Restart");
    let heart = this;
    //remove pause falling and disappear animation
    heart.classList.remove("paused", "falling");
    heart.querySelector(".good_heart_sprite").classList.remove("disappear");
    //restart to top position and add fall animation
    heart.offsetHeight;
    heart.removeEventListener("animationend", goodHeartRestart);
    heart.classList.add("falling");
    heart.addEventListener("click", goodHeartClicked);
}
//subtracting points
function subtractPoints() {
    console.log("Subtract points");
    //subtract points
    points--;
    //updating progressbar and score
    console.log("Score:" + points);
    document.querySelector("#score_text").textContent = points;
    document.querySelector("#game_over .show_score").textContent = ("SCORE:" + points);
    updateCharacter();
    //if game over
    if (points < -20) {
        gameOver();
    }
}

function addPoints() {
    console.log("Add points");
    //addpoints
    points += 2;
    //update score and progressbar
    console.log("Score:" + points);
    document.querySelector("#score_text").textContent = points;
    document.querySelector("#level_complete .show_score").textContent = ("SCORE:" + points);
    updateCharacter();
}

function updateCharacter() {
    if (points < 0) {
        document.querySelector("#yahoo").removeAttribute("class");
        document.querySelector("#yahoo").classList.add("sad_yahoo");
        document.querySelector("#coonie").removeAttribute("class");
        document.querySelector("#coonie").classList.add("sad_coonie");
    } else if (points < 25) {
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
}


function gameOver() {
    //pausing background music and playing game over sound
    console.log("Game Over");
    musicPlay();
    if (!muted) {
        gameOverSound.play();
    }
    //showing game over screen
    document.querySelector("#game_over").classList.add("visible");
    //pausing hearts
    pauseGame();
    //giving option to try again
    document.querySelector("#game_over .next_button").addEventListener("click", restartGame);
    document.querySelector("#game_over .skip_button").addEventListener("click", instructionBtn);
}

function levelComplete() {
    console.log("Level Complete!");
    backgroundMusic.pause();
    if (!muted) {
        levelCompleteSound.play();
    }
    //showing game over screen
    document.querySelector("#level_complete").classList.add("visible");
    //pausing hearts
    pauseGame();
    //giving option to try again
    document.querySelector("#level_complete .next_button").addEventListener("click", restartGame);
    document.querySelector("#level_complete .skip_button").addEventListener("click", instructionBtn);
}

function instructionBtn() {
    console.log("Show instrunctions");
    document.querySelector("#game_over .skip_button").removeEventListener("click", instructionBtn);
    document.querySelector("#level_complete .skip_button").removeEventListener("click", instructionBtn);

    document.querySelector("#game_over").classList.remove("visible");
    document.querySelector("#level_complete").classList.remove("visible");

    document.querySelector("#instructions").classList.remove("hide");
    document.querySelector("#instructions").classList.remove("invisible");
    document.querySelector("#instructions .next_button").addEventListener("click", restartGame);
}

function restartGame() {
    if (!muted) {
        gettingPointSound.play();
    }
    document.querySelector("#game_over .next_button").removeEventListener("click", restartGame);
    document.querySelector("#level_complete .next_button").removeEventListener("click", restartGame);
    document.querySelector("#restart_icon").removeEventListener("click", restartGame);
    document.querySelector("#settingscreen").classList.add("hide");

    document.querySelector("#seconds").textContent = 30;
    document.querySelector("#score_text").textContent = 0;

    //hiding game over screen
    document.querySelector("#game_over").classList.remove("visible");
    document.querySelector("#level_complete").classList.remove("visible");


    //    //removing paused animation for hearts
    restartHearts();

    gameOn = true;
    //reseting points and timer
    points = 0;
    timeLeft = 30;
    smalltimeLeft = 3;
    backgroundMusic.currentTime = 0;
    document.querySelector("#countdown").classList.remove("invisible");
    document.querySelector("#countdown").classList.remove("hide");
    countdown();
}

function gameEnded() {
    gameOn = false;
    if (points > 0) {
        levelComplete();
    } else {
        gameOver();
    }
}

function pauseGamebtn() {
    document.querySelector("#pause").removeEventListener("click", pauseGamebtn);
    if (gameOn == true) {
        pauseGame();
        gameOn == false;
        document.querySelector("#pause").addEventListener("click", pauseGamebtn);
    } else {
        gameOn == true;
        unpauseGame();
        start();

    }
}

function pauseGame() {

    console.log("gamePaused");
    gameOn = false;
    document.querySelector("#pause").classList.add("paused_icon");
    document.querySelector("#pause").classList.remove("pausing");

    musicPlay();
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
}

function unpauseGame() {
    console.log("unpause game");
    gameOn = true;

    document.querySelector("#pause").classList.add("pausing");
    document.querySelector("#pause").classList.remove("paused_icon");
    musicPlay();
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
}

function restartScreens() {
    document.querySelector("#welcome").classList.remove("slideleft");
    document.querySelector("#scene1").classList.remove("slideleft");
    document.querySelector("#scene2").classList.remove("slideleft");
    document.querySelector("#instructions").classList.remove("slideleft");
    document.querySelector("#countdown").classList.remove("slideleft");

}

function restartHearts() {
    console.log("Restart hearts");

    document.querySelector("#bad_heart_container1").classList.remove("falling", "position1", "speed1");
    document.querySelector("#bad_heart_container2").classList.remove("falling", "position2", "speed2");
    document.querySelector("#bad_heart_container3").classList.remove("falling", "position3", "speed3");
    document.querySelector("#bad_heart_container4").classList.remove("falling", "position4", "speed4");
    document.querySelector("#bad_heart_container5").classList.remove("falling", "position2", "speed5");
    document.querySelector("#good_heart_container1").classList.remove("falling", "position1", "speed6");
    document.querySelector("#good_heart_container2").classList.remove("falling", "position2", "speed7");
    document.querySelector("#good_heart_container3").classList.remove("falling", "position3", "speed1");
    document.querySelector("#good_heart_container4").classList.remove("falling", "position4", "speed4");
    document.querySelector("#good_heart_container5").classList.remove("falling", "position4", "speed5");

    document.querySelector("#bad_heart_container1").offsetHeight;
    document.querySelector("#bad_heart_container2").offsetHeight;
    document.querySelector("#bad_heart_container3").offsetHeight;
    document.querySelector("#bad_heart_container4").offsetHeight;
    document.querySelector("#bad_heart_container5").offsetHeight;
    document.querySelector("#good_heart_container1").offsetHeight;
    document.querySelector("#good_heart_container2").offsetHeight;
    document.querySelector("#good_heart_container3").offsetHeight;
    document.querySelector("#good_heart_container4").offsetHeight;
    document.querySelector("#good_heart_container5").offsetHeight;



}
