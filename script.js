const questions = [
    {
        question : 'MS-Word is an example of _____' , 
        answers : [
            {text : 'An operating system' , correct: false},
            {text : 'processing device' , correct: false},
            {text : 'Application software' , correct: true},
            {text : 'An input device' , correct: false}

        ] 

    },
    {
        question : 'A computer cannot "boot" if it does not have the _____ ',
        answers : [
            {text : 'Compiler' , correct: false},
            {text : 'Loader' , correct: false},
            {text : 'Operating system	', correct: true},
            {text : 'Assembler', correct: false}

        ]   
    },
    {
        question : 'Microsoft Office is an example of a',
        answers : [
            {text : 'Closed source software' , correct: false},
            {text : ' Open source software' , correct: false},
            {text : 'Horizontal market software' , correct: true},
            {text : 'vertical market software' , correct: false}

        ] 
    },
    {
        question : '________ is the process of dividing the disk into tracks and sectors ',
        answers : [
            {text : 'Tracking' , correct: false},
            {text : 'Formatting' , correct: true},
            {text : 'Crashing' , correct: false},
            {text : 'Allotting' , correct: false}

        ] 
    }

];
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-button')
const nextButton = document.getElementById('next-btn');
let currentQuestionIndex = 0;
let score =0;
function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + '. '+ currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button) ;
        if(answer.correct){
            button.dataset.correct= answer.correct;
        } 
        button.addEventListener("click" , selectAnswer)
    });

}
function resetState(){
    nextButton.style.display = ' none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect = selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display='block';
}
function showScore(){
    resetState();
    questionElement.innerHTML= `you scored ${score} out of ${questions.length} !!`;
    nextButton.innerHTML='play again';
    nextButton.style.display='block';
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();  
    }else{
        startQuiz();
    }
})
startQuiz();








