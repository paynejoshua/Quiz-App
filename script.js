// Variables:
    // Variable for start button (done)
    // Variable for question area (done)
    // Variable for answer buttons (done)
    // Variable for final answer button (done)
    // correct answer counter
    // question counter to show which question we are on and how many are left (ex: 2/5, 3/5, etc.) => dispaly in top left corner
    // variable for timer minutes and seconds

    const startBtn = document.querySelector("#start-btn");
    const qArea = document.querySelector("#questionArea");
    const answerBtn = document.querySelector("#answer-buttons");
    const finalBtn = document.querySelector("#final-btn");

    let correct = 0;
    let question = 0;
 


// Arrays: 
    // 5 questions with 4 possible answers each

// Functions: 
    // remove hide from question area
    // remove hide from final button
    // conditionals to check if answer is correct
    // When answer is incorrect subtract 5 seconds from clock
    // countdown timer (display in top right corner) 

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    
    // change this to be onclick of start button
   function beginCountDown() {
        var tenMinutes = 60 * 10,
            display = document.querySelector('#timer');
        startTimer(tenMinutes, display);
    };

    startBtn.addEventListener("click", beginCountDown);


    // startBtn.addEventListener("click", startTimer);







// If I have time:
    // See if there is a way to have background "breathe"
    // Onclick of start button have a 10 sec countdown to with breathing instructions and "breathing" icon