// how to get random answers

function getAnswer(){
    //var rand = Math.random()
    //var index = Math.floor( rand*lifesAnswers.length)
    //var answer = lifesAnswers[index]
    //return answer
    return lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)]
}


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


// How to change colors on click

function changeColor(red) {
    document.body.style.background = red;
}

function myFunc() {
    changeColor('yellow');
    result.innerHTML = "Background Color changed";
}        
// another way
function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
  }

// example  
<button onclick="myFunc()">
        Click here
    </button>

    



//How to get random ccolors on click//
var randomColor = Math.floor(Math.random()*16777215).toString(16);
// example//
function setBg () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

  

  
//   how to create a color picker
function setupColorPicker(initialColor, parentTag, text, onChange) {
	const colorPicker = createColorPicker(initialColor)
	makeLabel(colorPicker, parentTag, text)
	colorPicker.changed(onChange)
	return colorPicker
  }




// how to write function [var, const]

// const
const a = 10;
function f() {
    a = 9
    console.log(a)
}
f();

// var
var a = 10
function f() {
    var b = 20
    console.log(a, b)
}
f();
console.log(a);


 //Create anonymous function that listens for a click on anything with the class colorBlock
$(".colorBlock").click(function() {
    //Get the background color of the clicked color block by using the this object
    var $backgroundColor = $(this).css("background-color");
    //Set the body's background-color to the received background-color
    $("body").css("background-color", $backgroundColor);
  });


//   setting a document background color
document.body.style.backgroundColor = "white";




// How to get the day with javascript

<p id="datetime"></p>
// get current date and time
var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;












