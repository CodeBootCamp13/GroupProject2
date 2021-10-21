// To do:

// 1. Get the quiz we want to load
let quizName = window.location.search.split('=')[1];

let quizData;

// 2. Load JSON data 
let xhr = new XMLHttpRequest();
xhr.open('GET', `/questions/${quizName}.json`);
xhr.onload = function(){
    console.log(this);
    quizData= JSON.parse(this.responseText);

	// 3. Randomize the questions
	quizData.sort(() => (Math.random() > .5) ? 1 : -1);

};
xhr.send();
// 3. Randomize the questions

// 4. Display the first question
function displayQuestion() {
	let randomQuestion = quizData.shift();
	console.log(randomQuestion);
	document.getElementById('questionText').innerText = randomQuestion.question;
	for ( let i = 0; i < randomQuestion.answers.length; i++ ) {
		let answer = randomQuestion.answers[i];
		document.getElementById('answer_' + (i+1)).innerText = answer.; 
	}
}


// 5. Create the event listeners for the possible answers

// 6. Display if you got answer correct.

// 7. Create an event listener to go to the next question

// 8. Create an event listener on a button that ends quiz

// 9. Display the results

