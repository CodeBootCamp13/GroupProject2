//create a click event

document.addEventListener('click', function (event){
    console.log(event)
    let element = event.target;
    if (element.className == 'startQuiz') {
        var quizName = element.dataset.quiz
    window.location.href = 'quiz.html?quiz=' + quizName;
    }
    //window.location.href = 'quiz.html?quiz=vocab';
});

// display available quizzes
let quizzes = ['vocab', "Javascript", 'Node JS'];
for (let i = 0; i < quizzes.length; i++){
document.getElementById('quizList').innerHTML = document.getElementById("quizList").innerHTML + 
`<div class="card">
<h3>${quizzes[i]}</h3>
<button id="quiz_${i}" class="startQuiz" data-quiz="${quizzes[i]}">Start Quiz</button> </div>`;
}

