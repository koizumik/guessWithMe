//===========================================
//YouTube projects with Sam for Week 8 videos
//===========================================

/* QUESTION 1.
Write a program that asks the user for their name and greet them with their name.
var name = prompt('What is your name?')

document.write('Hello, ' + name + "! How are you?");
*/


/*QUESTION 2.
Modify the previous program so that ONLY the users ALICE and BOB are greeted with their names.

if(name == 'Alice' || 'Bob') {
	document.write('Hi, ' + name + '! How are you doing?')
} else {
	document.write('You are not Alice nor Bob. Please leave.')
}
*/

/*QUESTION 3.
using: document.getElementById('')
Created variable named, content with value of string.
Then selected the element by ID and printed its innerHTML as the content variable's value.

var content = "write anything here"
document.getElementById('message').innerHTML = content
*/

/*QUESTION 4.
Use ".value" to retrieve input data from a form.

Created function called getInfo(), used that function to store values from variables (username & password).
Created a <form> with <input> and <button> (button tag has an onclick function = "getInfo").
Retrieved the stored username and passwords in variables.
Printed the user's input values on the console.

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	console.log("your username is " + username + " and your passoword is " + password)
}
*/

/*QUESTION 5.
Looping through and array.

var cars = ["Honda", "Toyota", "Nissan", "Lexus"]

//what this does is prints the amount of arrays in the cars variable.
//answer = 4

console.log(cars.length)

//Created a for loop to see if in the array, there is a value of Toyota, and if so, print
"You're driving a sweet Toyota" on the console.

for(i = 0; i < cars.length; i++) {
	if(cars[i] = "Toyota") {
		console.log("You're driving a sweet " + cars[i]);
	} else if(cars[i] = "Lexus") {
		console.log("You're driving a beautiful " + cars[i]);
	} else {
		console.log("Why aren't you driving a Toyota or Lexus?")
	}
}
*/

/*QUESTION 6.

var arr = [10, 23, 12, 70, 8];
var biggest = 0;

for(i = 0; i < arr.length; i++) {
	if(biggest < arr[i]) {
		biggest = arr[i]
		//if you console.log() inside of the object, it will print all array values as long as it's increasing...all the way until the biggest value.
		console.log(biggest)
	}
}

//if you console.log() outside of the object, it'll print out ONLY the biggest value on the console.
console.log(biggest);

*/

/*QUESTION 7 & 8.
//Creating objects.

//this is an object with properties and values.
var cars = [
	{
		make: "honda",
		model: "civic",
		year: 2014,
		color: "white"
	},
	{	
		make: "toyota",
		model: "camry",
		year: 2000,
		color: "red"
	},
	{	
		make: "ford",
		model: "mustang",
		year: 2005,
		color: "black"
	}
]

for(i = 0; i < cars.length; i++) {
	if(cars[i].year < 2010) {
		document.write(cars[i].make + ", " + cars[i].model);
	}
}
//changing the object's property value - model: F150. Use 'dot notation' aka (.)
ford.model = "F150";

console.log(honda.model);
console.log(toyota.model);
console.log(ford.model);
*/


/*QUESTION 9.

var obj = [
	{
		username: 'sam',
		password: 'codify'
	},
	{
		username: 'matt',
		password: 'academy'
	},
	{
		username: 'chris',
		password: 'forever'
	}
]


function getInfo() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	for(i = 0 ; i < obj.length; i++) {
		if(username == obj[i].username && password == obj[i].password){
			document.write('Correct username and password entered.');
			return;
		}
	}
	//print your error or else statement AFTER the for loop so that you don't get multiple error messages.
	alert('Please re-enter your username or password.');
}*/

/*==================================================
	YouTube Week 8 video practice END.
==================================================*/

var name = prompt('What is your first name?');
var camelize = name.slice(-999999,1);
var camelizeEnd = name.slice(1);

var login = [
	{
		username: 'brad',
		password: 'foster'
	},
	{
		username: 'alex',
		password: 'fowler'
	},
	{
		username: 'nicholas',
		password: 'saephanh'
	},
	{
		username: 'sam',
		password: 'brody'
	},
	{
		username: 'matt',
		password: 'brody'
	},
	{
		username: 'joshua',
		password: 'larks'
	},
	{
		username: 'elly',
		password: 'nakama'
	},
	{
		username: 'jenna',
		password: 'shintaku'
	}
]

document.getElementById('welcome').innerHTML = "Hello, " + camelize.toUpperCase() + camelizeEnd.toLowerCase();

function getInfo() {
	var username = document.getElementById('username').value.toLowerCase();
	var password = document.getElementById('password').value.toLowerCase();

	for( i = 0; i < login.length; i++) {
		if(username == login[i].username && password == login[i].password) {
			document.write('Nice! You entered the correct username and password.')
			return;
		}
	}
	alert('Error. Username or password not found.');
}

	