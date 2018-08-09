// Add your code below...

const myName = "Sophia"
const myLastName = "Khanna"
const myFullName = myName + " " + myLastName

const number1 = 6
const number2 = 2
const sumNumbers = number1 + number2


function flipCoin(threshold) {
	const myRandomNumber = Math.random()
	if (myRandomNumber > threshold) {
		alert("You won, " + myName)
		alert("You really won!")
	} else {
		alert("You lost, " + myNAme)
		alert("Loser!")
	}
}

function resizeButton () {
	const newRadius = Math.random() *20;
	$('.button').css('border-radius', newRadius + 'px');

}

function slideImage() {
	$('.codingbitmoji').slideUp();
	$('.codingbitmoji').slideDown();
}