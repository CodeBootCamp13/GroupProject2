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
    displayQuestion();
};
xhr.send();


// 4. Display the first question
let randomQuestion;

function displayQuestion(){

    document.getElementById('nextQuestion').classList.add("hidden");

// get one of the questions from the array
    randomQuestion = quizData.shift();

    if (randomQuestion){
    
    

    // to do:handle the end
        console.log(randomQuestion);

    // display the question
        document.getElementById('questionText').innerText = randomQuestion.question;

    // display all four answers
        for (let i = 0; i < randomQuestion.answers.length; i++){
            let answer = randomQuestion.answers[i];
            document.getElementById('answer_'+ (i+1)).innerText = answer.answer;
            document.getElementById('answer_'+ (i+1)).style.backgroundColor="";
            console.log(answer);
        }
    } else {
        document.getElementById('quizDiv').innerHTML="Thank you! You have completed the quiz.";
    }
    
};

// 5. Create the event listeners for the possible answers
function checkAnswer(event){
    // what answer did user select
    let answer = parseInt(this.id.split('_')[1]);
    console.log(answer)

    // check to see if answer is the correct answer
    answer = answer - 1;
    console.log(answer)
    console.log(randomQuestion.answers[answer]);

    // display feedback to the user
    if (randomQuestion.answers[answer].correct){
        this.style.backgroundColor="green";
    } 
    else { 
        this.style.backgroundColor="red";
    } 

    // enable the next question button

    document.getElementById('nextQuestion').classList.remove("hidden");
}; 



document.getElementById('answer_1').addEventListener('click',checkAnswer);
document.getElementById('answer_2').addEventListener('click',checkAnswer);
document.getElementById('answer_3').addEventListener('click',checkAnswer);
document.getElementById('answer_4').addEventListener('click',checkAnswer);

// 6. Display if you got answer correct.



// 7. Create an event listener to go to the next question

document.getElementById('nextQuestion').addEventListener('click',displayQuestion);

// 8. Create an event listener on a button that ends quiz

// 9. Display the results

