


var levelCounter = 1 ;



var checker = "String";

document.addEventListener("keypress" , function(event){
    var startSound = new Audio("sounds/start.wav");
    startSound.play();
    $("h1").text("Level "+levelCounter);
    checker = randomSelector();
})


// set animation and sound on button click
$("button").click(function(event){
    buttonPressed = event.target.id;


    if(checker === buttonPressed){
        console.log("win");
        levelCounter ++;
        $("h1").text("Level "+levelCounter);
        setTimeout(function(){
            checker = randomSelector();

            console.log("wait");
        },2000);

    }
    buttonPressedAnimation(event.target.id , 100);
    buttonSound(event.target.id);

});

function randomSelector(){

    var randomizedNumber = Math.floor((Math.random()*4));

    var coloredButtons = [ "green" ,"red" , "yellow" , "blue"];

    var randomButton = coloredButtons[randomizedNumber];


    buttonPressedAnimation(randomButton , 200);
    return randomButton;
}


function buttonPressedAnimation(buttonId , delay){
    $("#" + buttonId).addClass("pressed");
    setTimeout(function(){
        $("#" + buttonId).removeClass("pressed");
    },delay);
}


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




var win = true ; 
// console.log(gameStart);


// for(var i=0 ; i<2 ;i++){

//     buttonPressedAnimation(randomButton , 200);
//     console.log(randomButton);
//     if($("#" + randomButton.clicked === true)  ){
//         console.log("win");
//     }
//     win = false;

    

 

// }
