var score = 0;
var playerscore = document.getElementById('player-score');
playerscore.innerHTML = "0";

var first = document.getElementById('first');
var second = document.getElementById('second');
var probNum = document.getElementById('pnum');
var pnum = 0;

function randInt() {
	return Math.floor(Math.random() * 13);
}

var num1;
var num2;

function newQuestion() {
	num1 = randInt();
	num2 = randInt();
	first.innerHTML = num1.toString();
	second.innerHTML = num2.toString();
	pnum++;
	probNum.innerHTML = pnum.toString();
	timeLeft = orig_time;
}


//init game
newQuestion();

//change this to change the speed of the game
var orig_time = 3;

var message = document.getElementById('question');
var timeLeft = orig_time;
function updateTime() {
	var time = document.getElementById('time');
	timeLeft--;
	time.innerHTML = timeLeft.toString();
	if (timeLeft == 0) {
		setTimeout(stopTime, 0);
		message.style.fontSize = "xx-large";
		message.innerHTML = "Time's Up!";
		score -= 25;
		playerscore.innerHTML = score.toString();
		resetButton.innerHTML = "New Game";
	}	
}

var timer = setInterval(updateTime, 1000);

function stopTime() {
	clearInterval(timer);
}

//buttons
var submitButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');

submitButton.onclick = function() {
	var guess = document.getElementById('guess');
	if (guess.value == (num1 * num2)) {
		console.log("yeah!");
		score += 100;
		playerscore.innerHTML = score.toString();
		newQuestion();
		guess.value = '';
	}
	else if (timeLeft > 0) {
		score -= 25;
		playerscore.innerHTML = score.toString();
		guess.value = '';
	}
}

//fix this
resetButton.onclick = function() {
	if (resetButton.innerHTML == "New Game") {
		resetButton.innerHTML = "New Question";
		pnum = 0;
		score = 0;
		message.innerHTML = "<span id=\"first\">3</span> * <span id=\"second\">5</span> = ?";
		timeLeft = orig_time;
	}		
	newQuestion();
}








