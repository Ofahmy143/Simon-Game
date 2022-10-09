

// counter for the levels
var levelCounter = 1 ;
// array to store the buttons to be selected
var arrToBeSelected = [] ;
// variable to store the current pressed button
var buttonPressed ;
// flag for game over
var end = false;
// counter for the to be selected buttons array
var counter = 0;
//cariable to store the blinked over button to be stored in the to be selected buttons array
var checker = "String";

// keyboard event listener
document.addEventListener("keypress" , function(event){
    // checks if it's game over to reload
    if(end == true){
        location.reload();
    }else{
        // if it's not game over it just starts the game by starting the blinker
    var startSound = new Audio("sounds/start.wav");
    startSound.play();
    $("h1").text("Level "+levelCounter);
    checker = randomSelector();
    arrToBeSelected.push(checker);
}
})

//buttons event listener
$("button").click(function(event){
    // store the id of the selected button
    buttonPressed = event.target.id;
    // check the selected button with the corresponding item in the array
    if(buttonPressed === arrToBeSelected[counter]){
        //to be selected array counter increases
        counter++;
        // check if this is the last element of the array which means we got all the buttons right
        if(counter === levelCounter) {
            //go on to the next level
            levelCounter++;
            //update the header
            $("h1").text("level "+levelCounter);
            // console.log("win");
            // set the blinker to work after 1 second to avoid confusion
            setTimeout(function(){
                checker = randomSelector();
                arrToBeSelected.push(checker);
                counter = 0;
                console.log(arrToBeSelected);
            },1000)

        }

    }else {
        //Game over screen changes
        //change the header
        $("h1").text("Game Over press any key to try again ");
        //remove the buttons while giving th eoption to reload via keyboard
        $("button").fadeOut();
        //game over buzz
        var GameOverSound = new Audio("sounds/wrong-answer-sound-effect.mp3");
        GameOverSound.play();

        end = true;
    }

    // set animation and sound on button click
    buttonPressedAnimation(event.target.id , 100);
    buttonSound(event.target.id);



    // buttonPressed.push(event.target.id.toString())     
    // if(checker.toString() === buttonPressed.toString()){
    //     console.log("win");
    //     levelCounter ++;
    //     $("h1").text("Level "+levelCounter);
    //     setTimeout(function(){
    //         checker = randomSelector();
    //         arr.push(checker);
    //         console.log("wait");
    //         console.log(arr);
    //         console.log(buttonPressed);
    //     },1000);

    // }else{
    //     buttonPressed = [];
    //     var GameOverSound = new Audio("sounds/wrong-answer-sound-effect.mp3");
    //     GameOverSound.play();
    //     $("body").addClass("GameOver");
    //     setTimeout(function(){
    //         $("html").removeClass("GameOver");

    //     },1000)
    //     $("h1").text("Game over press any key to try again");
    //     $("button").fadeOut();
    //     end = true;

    // }


});

// the blinker function that blinks at buttons to be selected

function randomSelector(){

    var randomizedNumber = Math.floor((Math.random()*4));

    var coloredButtons = [ "green" ,"red" , "yellow" , "blue"];

    var randomButton = coloredButtons[randomizedNumber];


    buttonPressedAnimation(randomButton , 200);
    return randomButton;
}

// adding the blinking animations to the buttons
function buttonPressedAnimation(buttonId , delay){
    $("#" + buttonId).addClass("pressed");
    setTimeout(function(){
        $("#" + buttonId).removeClass("pressed");
    },delay);
}

// adding the sounds to the buttons
function buttonSound(button){
    switch(button){
        case "green":
            var greenBeep = new Audio("sounds/jump.wav");
            greenBeep.play();
            break;
        case "red" :
            var redBeep = new Audio("sounds/Jump6.wav");
            redBeep.play();
            break;
        case "yellow":
            var yellowBeep = new Audio("sounds/Jump7.wav");
            yellowBeep.play();
            break;
        case "blue":
            var blueBeep = new Audio("sounds/Jump10.wav");
            blueBeep.play();
            break;
        default:
            break;
    }
}




// store last guesses in an array




// var win = true ; 
// console.log(gameStart);


// for(var i=0 ; i<2 ;i++){

//     buttonPressedAnimation(randomButton , 200);
//     console.log(randomButton);
//     if($("#" + randomButton.clicked === true)  ){
//         console.log("win");
//     }
//     win = false;

    

 

// }
