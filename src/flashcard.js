import $ from 'jquery';

export class FlashcardDeque {
  constructor(questions, interval, user) {
    //questions is an array of Flashcard objects
    this.questions = questions;
    this.interval = interval;
    this.questionNumber = 1;
    this.status = true;
    this.user = user;
  }

  getFlashcard() {
      return this.questions[this.questionNumber-1];
  }

  checkAnswer(userAnswer) {
    this.getFlashcard().setUserAnswer(userAnswer);
    if (this.getFlashcard().getAnswer() === this.getFlashcard().getUserAnswer()) {
      this.user.increasePoint(this.getFlashcard().getUserPoint());
      this.update();
    }
    else {
      this.user.decreasePoint(this.getFlashcard().getUserPoint());
      this.update();
    }
  }

  startFlashcards() {
    let object = this;
    object.questionNumber = 1;
    let startQue = function () {
      let queFunction = setInterval( () => {
        if (this.questionNumber === this.questions.length) {
          console.log("reached last check");
          if (this.questions[this.questionNumber-1].getUserAnswer() === "") {
            let lastFlash = this.getFlashcard();
            console.log(lastFlash);
            this.user.decreasePoint(lastFlash.getPoint());
            $("#answer").text(lastFlash.getAnswer());
            $("#point").text(this.user.getUserPoint());
          }
          clearInterval(queFunction);
        }
        else {
          if (this.questions[this.questionNumber-1].getUserAnswer() === "") {
            console.log(this.questions[this.questionNumber-1]);
            console.log("user answer empty");
            this.user.decreasePoint(this.getFlashcard().getPoint());
          }
          this.questionNumber++;
          this.update();
        }
      }, this.interval);
      queFunction;
    }
    startQue.apply(object);
  }

  update () {
    $("#question").text(this.getFlashcard().getQuestion());
    $("#question-number").text(this.questionNumber);
    $("#answer").text(this.getFlashcard().getAnswer());
    $("#point").text(this.user.getUserPoint());
  }
}

export class Flashcard {
  constructor(question, answer, point) {
    this.question = question;
    this.userAnswer = "";
    this.answer = answer;
    this.point = point;
  }

  getQuestion() {
    return this.question;
  }

  getUserAnswer() {
    return this.userAnswer;
  }

  getAnswer() {
    return this.answer;
  }

  getPoint() {
    return this.point;
  }

  setUserAnswer(userAnswer) {
    this.userAnswer = userAnswer;
  }
}

export class User {
  constructor(name) {
    this.name = name;
    this.point = 0;
  }

  increasePoint(point) {
    this.point += point;

  }

  decreasePoint(point) {
    this.point -= point;
  }

  getUserPoint() {
    return this.point;
  }
}
