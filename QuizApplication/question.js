var questions = [];

var QuizElement = function (question, rightAnswer, wrongAnswer) {
  this.question = question;
  this.rightAnswer = rightAnswer;
  this.wrongAnswer = wrongAnswer;
}

var question1 = new QuizElement(
  "Who is the drummer of Metallica?",
  "Lars Ulrich",
  "Johnny Logan"
)

var question2 = new QuizElement(
  "Which unit indicates the light intensity?",
  "Candela",
  "Lumens"
)

var question3 = new QuizElement(
  "How many oscars did the Titanic movie got?",
  "Eleven",
  "Nine"
)

var question4 = new QuizElement(
  "What is the world s largest office building?",
  "Pentagon",
  "Apple's Headquarters"
)

questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
