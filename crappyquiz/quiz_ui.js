var QuizUI = {

  displayNext: function() {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  }, //DISPLAY NEXT

  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);

  }, // DISPLAY QUESTION

  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;

    for (var i=0; i<choices.length; i++) {
      this.populateIdWithHTML("guess" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  }, //DISPLAY CHOICES

  displayScore: function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2>Your score is: " + quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  }, //GAME OVER

  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  }, //pop with HTML

  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  }, //GUESS HANDLER

  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + 
      currentQuestionNumber + " of " + quiz.questions.length);

  }

};