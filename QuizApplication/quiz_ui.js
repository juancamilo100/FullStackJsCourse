
var questionField = document.getElementById('question');
var quizProgress = document.getElementById('progress');
var quiz = document.getElementById('quiz');
var quizTitle = quiz.querySelector('h1');

var questionCounter = 0;
var numberOfButtons = buttons.length;
var rightAnswersCounter = 0;

function getRandomButton () {
  return (Math.floor(Math.random() * numberOfButtons) + 1) - 1;
}

function updateUserInterface(questionNumber) {
  var quizProgressText;
  questionField.innerHTML = questions[questionNumber].question;
  buttons[getRandomButton()].choice.innerHTML = questions[questionNumber].rightAnswer;
  for(var i = 0; i < numberOfButtons; i++)
  {
    if(buttons[i].choice.innerHTML.localeCompare(questions[questionNumber].rightAnswer)) {
      buttons[i].choice.innerHTML = questions[questionNumber].wrongAnswer;
    }
  }

  quizProgressText = "Question ";
  quizProgressText += questionCounter + 1;
  quizProgressText += " of ";
  quizProgressText += questions.length;

  quizProgress.innerHTML = quizProgressText;
}

updateUserInterface(questionCounter);

buttonChoice1.button.onclick = function () {
  processChoice(buttonChoice1);
}

buttonChoice2.button.onclick = function () {
  processChoice(buttonChoice2);
}
