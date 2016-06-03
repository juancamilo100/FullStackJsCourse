var ButtonChoicePair = function (buttonId, choiceId) {
  this.button = document.getElementById(buttonId);
  this.choice = document.getElementById(choiceId);
}

var buttonChoice1 = new ButtonChoicePair(
  "guess0",
  "choice0"
)

var buttonChoice2 = new ButtonChoicePair(
  "guess1",
  "choice1"
)

var buttons = [
  buttonChoice1,
  buttonChoice2
];

function answerIsValid(answerChosen, rightAnswer) {
  return !(answerChosen.localeCompare(rightAnswer));
}

function validateAnswer (buttonChoice) {
  if(answerIsValid(buttonChoice.choice.innerHTML, questions[questionCounter].rightAnswer)) {
    rightAnswersCounter++;
  }
}

function hideQuizContent () {
  for(var i = 0; i < numberOfButtons; i++)
  {
    buttons[i].choice.style.visibility = "hidden";
    buttons[i].button.style.visibility = "hidden";
  }

  quizProgress.style.display = "none";;
}

function finishQuiz () {
  quizTitle.innerHTML = "Game Over";
  questionField.innerHTML = "Your score is: ";
  questionField.innerHTML += rightAnswersCounter;
  hideQuizContent();
}

function processChoice (buttonChoice) {
  validateAnswer(buttonChoice);
  if(++questionCounter < questions.length)  {
    validateAnswer(buttonChoice);
    updateUserInterface(questionCounter);
  }
  else {
    finishQuiz();
  }
}
