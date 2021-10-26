let quiz = [];

// when user submits form, grab values

document.getElementById('quizForm').addEventListener('submit',function(event){
    event.preventDefault();
    // grab question
    let question = {
        question: document.getElementById('question').value,
        answers: []
    };
    document.getElementById('question').value = '';

    // grab answers 1-4
    for ( let i = 1; i< 5; i++){
        let answer = {
            answer: document.getElementById('answer_'+i).value,
            correct: i == 1 ? true:false
        };
        question.answers.push(answer);
        document.getElementById('answer_'+i).value = '';
    }
    console.log(question)

    quiz.push(question)

    let JSONString = JSON.stringify(quiz);
    
    document.getElementById('generatedQuizJson').innerText = JSONString;

    document.getElementById('question').focus();
})
// build a JSON string

// display JSON string on the page

// clear form

