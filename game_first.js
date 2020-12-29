window.addEventListener("load", startHearts);
let points = 1;
if (points < 4) {
    document.querySelector("#yahoo").removeAttribute("class");
    document.querySelector("#yahoo").classList.add("sad_yahoo");
} else if (points < 6) {
    document.querySelector("#yahoo").removeAttribute("class");
    document.querySelector("#yahoo").classList.add("neutral_yahoo");
} else {
    document.querySelector("#yahoo").removeAttribute("class");
    document.querySelector("#yahoo").classList.add("happy_yahoo");
}


function startHearts() {
    console.log("startHearts");
    document.querySelector("#bad_heart_container1").classList.add("falling", "speed1");
    document.querySelector("#bad_heart_container2").classList.add("falling", "speed2");
    document.querySelector("#bad_heart_container3").classList.add("falling", "speed3");
    document.querySelector("#bad_heart_container4").classList.add("falling", "speed4");
    document.querySelector("#bad_heart_container5").classList.add("falling", "speed5");
    document.querySelector("#good_heart_container1").classList.add("falling", "speed6");
    document.querySelector("#good_heart_container2").classList.add("falling", "speed7");
    document.querySelector("#good_heart_container3").classList.add("falling", "speed4");
    document.querySelector("#good_heart_container4").classList.add("falling", "speed3");
    document.querySelector("#good_heart_container5").classList.add("falling", "speed2");
    document.querySelector("#bad_heart_container1").addEventListener("click", badHeartClicked1);
    document.querySelector("#bad_heart_container2").addEventListener("click", badHeartClicked2);
    document.querySelector("#bad_heart_container3").addEventListener("click", badHeartClicked3);
    document.querySelector("#bad_heart_container4").addEventListener("click", badHeartClicked4);
    document.querySelector("#bad_heart_container5").addEventListener("click", badHeartClicked5);
    document.querySelector("#good_heart_container1").addEventListener("click", goodHeartClicked1);
    document.querySelector("#good_heart_container2").addEventListener("click", goodHeartClicked2);
    document.querySelector("#good_heart_container3").addEventListener("click", goodHeartClicked3);
    document.querySelector("#good_heart_container4").addEventListener("click", goodHeartClicked4);
    document.querySelector("#good_heart_container5").addEventListener("click", goodHeartClicked5);
}

function badHeartClicked1() {
    console.log("bad Heart Clicked");
    document.querySelector("#bad_heart_container1").classList.add("paused");
    document.querySelector("#bad_heart_container1 .bad_heart_sprite").classList.add("break");
    document.querySelector("#bad_heart_container1").removeEventListener("click", badHeartClicked1);
    document.querySelector("#bad_heart_container1").addEventListener("animationend", badHeartRestart1);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points--;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function badHeartRestart1() {
    console.log("Bad heart restart");
    document.querySelector("#bad_heart_container1").classList.remove("paused", "falling");
    document.querySelector("#bad_heart_container1 .bad_heart_sprite").classList.remove("break");
    document.querySelector("#bad_heart_container1").offsetHeight;
    document.querySelector("#bad_heart_container1").classList.add("falling");
    document.querySelector("#bad_heart_container1").addEventListener("click", badHeartClicked1);
    document.querySelector("#bad_heart_container1").removeEventListener("animationend", badHeartRestart1);
}

function badHeartClicked2() {
    console.log("bad Heart Clicked");
    document.querySelector("#bad_heart_container2").classList.add("paused");
    document.querySelector("#bad_heart_container2 .bad_heart_sprite").classList.add("break");
    document.querySelector("#bad_heart_container2").removeEventListener("click", badHeartClicked2);
    document.querySelector("#bad_heart_container2").addEventListener("animationend", badHeartRestart2);
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points--;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function badHeartRestart2() {
    console.log("Bad heart restart");
    document.querySelector("#bad_heart_container2").classList.remove("paused", "falling");
    document.querySelector("#bad_heart_container2 .bad_heart_sprite").classList.remove("break");
    document.querySelector("#bad_heart_container2").addEventListener("click", badHeartClicked2);
    document.querySelector("#bad_heart_container2").offsetHeight;
    document.querySelector("#bad_heart_container2").classList.add("falling");
    document.querySelector("#bad_heart_container2").removeEventListener("animationend", badHeartRestart2);
}

function badHeartClicked3() {
    console.log("bad Heart Clicked");
    document.querySelector("#bad_heart_container3").classList.add("paused");
    document.querySelector("#bad_heart_container3 .bad_heart_sprite").classList.add("break");
    document.querySelector("#bad_heart_container3").removeEventListener("click", badHeartClicked3);
    document.querySelector("#bad_heart_container3").addEventListener("animationend", badHeartRestart3);
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points--;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function badHeartRestart3() {
    console.log("Bad heart restart");
    document.querySelector("#bad_heart_container3").classList.remove("paused", "falling");
    document.querySelector("#bad_heart_container3 .bad_heart_sprite").classList.remove("break");
    document.querySelector("#bad_heart_container3").addEventListener("click", badHeartClicked3);
    document.querySelector("#bad_heart_container3").offsetHeight;
    document.querySelector("#bad_heart_container3").classList.add("falling");
    document.querySelector("#bad_heart_container3").removeEventListener("animationend", badHeartRestart3);
}

function badHeartClicked4() {
    console.log("bad Heart Clicked");
    document.querySelector("#bad_heart_container4").classList.add("paused");
    document.querySelector("#bad_heart_container4 .bad_heart_sprite").classList.add("break");
    document.querySelector("#bad_heart_container4").removeEventListener("click", badHeartClicked4);
    document.querySelector("#bad_heart_container4").addEventListener("animationend", badHeartRestart4);
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points--;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function badHeartRestart4() {
    console.log("Bad heart restart");
    document.querySelector("#bad_heart_container4").classList.remove("paused", "falling");
    document.querySelector("#bad_heart_container4 .bad_heart_sprite").classList.remove("break");
    document.querySelector("#bad_heart_container4").addEventListener("click", badHeartClicked4);
    document.querySelector("#bad_heart_container4").offsetHeight;
    document.querySelector("#bad_heart_container4").classList.add("falling");
    document.querySelector("#bad_heart_container4").removeEventListener("animationend", badHeartRestart4);
}

function badHeartClicked5() {
    console.log("bad Heart Clicked");
    document.querySelector("#bad_heart_container5").classList.add("paused");
    document.querySelector("#bad_heart_container5 .bad_heart_sprite").classList.add("break");
    document.querySelector("#bad_heart_container5").removeEventListener("click", badHeartClicked5);
    document.querySelector("#bad_heart_container5").addEventListener("animationend", badHeartRestart5);
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points--;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function badHeartRestart5() {
    console.log("Bad heart restart");
    document.querySelector("#bad_heart_container5").classList.remove("paused", "falling");
    document.querySelector("#bad_heart_container5 .bad_heart_sprite").classList.remove("break");
    document.querySelector("#bad_heart_container5").addEventListener("click", badHeartClicked5);
    document.querySelector("#bad_heart_container5").offsetHeight;
    document.querySelector("#bad_heart_container5").classList.add("falling");
    document.querySelector("#bad_heart_container5").removeEventListener("animationend", badHeartRestart5);
}

function goodHeartClicked1() {
    console.log("Good heart clicked");
    document.querySelector("#good_heart_container1").classList.add("paused");
    document.querySelector("#good_heart_container1 .good_heart_sprite").classList.add("disappear");
    document.querySelector("#good_heart_container1").removeEventListener("click", goodHeartClicked1);
    document.querySelector("#good_heart_container1").addEventListener("animationend", goodHeartRestart1);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points++;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function goodHeartRestart1() {
    console.log("Good heart restart");
    document.querySelector("#good_heart_container1").classList.remove("paused", "falling");
    document.querySelector("#good_heart_container1 .good_heart_sprite").classList.remove("disappear");
    document.querySelector("#good_heart_container1").offsetHeight;
    document.querySelector("#good_heart_container1").classList.add("falling");
    document.querySelector("#good_heart_container1").addEventListener("click", goodHeartClicked1);
    document.querySelector("#good_heart_container1").removeEventListener("animationend", goodHeartRestart1);
}

function goodHeartClicked2() {
    console.log("Good heart clicked");
    document.querySelector("#good_heart_container2").classList.add("paused");
    document.querySelector("#good_heart_container2 .good_heart_sprite").classList.add("disappear");
    document.querySelector("#good_heart_container2").removeEventListener("click", goodHeartClicked2);
    document.querySelector("#good_heart_container2").addEventListener("animationend", goodHeartRestart2);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    points++;
    document.querySelector("#score").textContent ="Score:" + points;
}

function goodHeartRestart2() {
    console.log("Good heart restart");
    document.querySelector("#good_heart_container2").classList.remove("paused", "falling");
    document.querySelector("#good_heart_container2 .good_heart_sprite").classList.remove("disappear");
    document.querySelector("#good_heart_container2").offsetHeight;
    document.querySelector("#good_heart_container2").classList.add("falling");
    document.querySelector("#good_heart_container2").addEventListener("click", goodHeartClicked2);
    document.querySelector("#good_heart_container2").removeEventListener("animationend", goodHeartRestart2);
}

function goodHeartClicked3() {
    console.log("Good heart clicked");
    document.querySelector("#good_heart_container3").classList.add("paused");
    document.querySelector("#good_heart_container3 .good_heart_sprite").classList.add("disappear");
    document.querySelector("#good_heart_container3").removeEventListener("click", goodHeartClicked3);
    document.querySelector("#good_heart_container3").addEventListener("animationend", goodHeartRestart3);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    points++;
    document.querySelector("#score").textContent ="Score:" + points;
}

function goodHeartRestart3() {
    console.log("Good heart restart");
    document.querySelector("#good_heart_container3").classList.remove("paused", "falling");
    document.querySelector("#good_heart_container3 .good_heart_sprite").classList.remove("disappear");
    document.querySelector("#good_heart_container3").offsetHeight;
    document.querySelector("#good_heart_container3").classList.add("falling");
    document.querySelector("#good_heart_container3").addEventListener("click", goodHeartClicked3);
    document.querySelector("#good_heart_container3").removeEventListener("animationend", goodHeartRestart3);
}

function goodHeartClicked4() {
    console.log("Good heart clicked");
    document.querySelector("#good_heart_container4").classList.add("paused");
    document.querySelector("#good_heart_container4 .good_heart_sprite").classList.add("disappear");
    document.querySelector("#good_heart_container4").removeEventListener("click", goodHeartClicked4);
    document.querySelector("#good_heart_container4").addEventListener("animationend", goodHeartRestart4);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points++;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function goodHeartRestart4() {
    console.log("Good heart restart");
    document.querySelector("#good_heart_container4").classList.remove("paused", "falling");
    document.querySelector("#good_heart_container4 .good_heart_sprite").classList.remove("disappear");
    document.querySelector("#good_heart_container4").offsetHeight;
    document.querySelector("#good_heart_container4").classList.add("falling");
    document.querySelector("#good_heart_container4").addEventListener("click", goodHeartClicked4);
    document.querySelector("#good_heart_container4").removeEventListener("animationend", goodHeartRestart4);
}

function goodHeartClicked5() {
    console.log("Good heart clicked");
    document.querySelector("#good_heart_container5").classList.add("paused");
    document.querySelector("#good_heart_container5 .good_heart_sprite").classList.add("disappear");
    document.querySelector("#good_heart_container5").removeEventListener("click", goodHeartClicked5);
    document.querySelector("#good_heart_container5").addEventListener("animationend", goodHeartRestart5);
    document.querySelector("#progress_bar").classList.remove("progress_at_" + points);
    points++;
    console.log("Score:" + points);
    document.querySelector("#progress_bar").classList.add("progress_at_" + points);
    document.querySelector("#score").textContent ="Score:" + points;
}

function goodHeartRestart5() {
    console.log("Good heart restart");
    document.querySelector("#good_heart_container5").classList.remove("paused", "falling");
    document.querySelector("#good_heart_container5 .good_heart_sprite").classList.remove("disappear");
    document.querySelector("#good_heart_container5").offsetHeight;
    document.querySelector("#good_heart_container5").classList.add("falling");
    document.querySelector("#good_heart_container5").addEventListener("click", goodHeartClicked5);
    document.querySelector("#good_heart_container5").removeEventListener("animationend", goodHeartRestart5);
}


//
// heart.classList.remove("speed1");
//    heart.classList.remove("speed2");
//    heart.classList.remove("speed3");
//    heart.classList.remove("speed4");
//    heart.classList.remove("speed5");
//    heart.classList.remove("speed6");
//    heart.classList.remove("speed7");
//    let speed = Math.floor((Math.random() * 7) + 1);
//    heart.classList.add("speed"+speed);
