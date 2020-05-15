function myFunction() {
	document.getElementById('test').style.color = 'red';
}

// document.getElementById('test').innerHTML = '<h1>Hello h1<h1>';

function changeText() {
	var userInput = document.getElementById('userInput').value;
	document.getElementById('test2').innerHTML = userInput;
}

const myText = 'Hello again ';
const myGreet = 'Have a nice day';
document.getElementById('myText').innerHTML = myText;
document.getElementById('myGreet').innerHTML = myGreet;

function getName() {
	var name = document.getElementById('nameInput').value;
	document.getElementById('nameOutput').innerHTML = name;
}
function getAdress() {
	var adress = document.getElementById('adressInput').value;
	document.getElementById('adressOutput').innerHTML = adress;
}
