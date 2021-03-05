var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

let randomColor = () => {
	// pick a "red" from 0-255
	let red = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	let green = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	let blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
};

let generateRandomColors = numSquares => {
	// make an array
	let arr = [];
	// add numSquares random colors to array
	for (let i = 0; i < numSquares; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array;
	return arr;
};

let reset = () => {
	resetButton.textContent = "New Colors";
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color diaplay to match new picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
};

let pickColor = () => {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

let setupModeButtons = () => {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
};

let setupSquares = () => {
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
};

let changeColors = color => {
	// loop through squares
	for (var i = 0; i < squares.length; i++) {
		// change each color to the correct color
		squares[i].style.backgroundColor = color;
	}
};

function init() {
	// mode button event listeners;
	setupModeButtons();
	// To find if player wins or not.
	setupSquares();
	reset();
}

init();

// To reset the game
resetButton.addEventListener("click", function() {
	reset();
});
