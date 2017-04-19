//Questions

var questions = [
  new Question("大木", ["だいぼく","たいぼく"], "たいぼく"),
  new Question("河原", ["かわら","かわはら"], "かわら")
];

//Quiz
var quiz = new Quiz(questions);

//UI
QuizUI.displayNext();