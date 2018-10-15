import $ from 'jquery';

export class FlashcardDeque {
  constructor(questions, interval, user) {
    //questions is an array of Flashcard objects
    this.questions = questions;
    this.interval = interval;
    this.questionNumber = 0;
    this.status = true;
    this.user = user;
  }

  getFlashcard() {
    if (this.status === true) 
      return this.questions[this.questionNumber];
    else
      return new Error("Game over");
  }

  checkAnswer(userAnswer) {
    this.getFlashcard().setUserAnswer(userAnswer);
    if (this.getFlashcard().getAnswer() === this.getFlashcard().getUserAnswer()) {
      this.user.increasePoint(this.getFlashcard().getPoint()); 
      this.update();
    } 
    else {
      this.user.decreasePoint(this.getFlashcard().getPoint());
      this.update();
    }
  }

  startFlashcards() {
    let currentTimeMS = Date.now();
    this.questionNumber = 0;
    setTimeout(function() {
      return startInteval;
    }, this.interval);
    let startInteval = setInterval(() => {
      let timeGap = Date.now() - currentTimeMS;
      console.log(timeGap);
      if (this.questionNumber === this.questions.length) {
        // if (this.questions[this.questionNumber].getUserAnswer() === "") {
        //   this.user.decreasePoint(this.getFlashcard().getPoint());
        // }
        //if current card is the last one
        this.status = false;
        clearInterval();    
      }
      else {
        if (this.questions[this.questionNumber].getUserAnswer() === "") {
          console.log(this.questions[this.questionNumber]);
          console.log("user answer empty");
          debugger;
          this.user.decreasePoint(this.getFlashcard().getPoint());
          this.update();
        }
        debugger;
        this.questionNumber++;
      }
      currentTimeMS = Date.now();
    }, this.interval);
  }

  update () {
    $("#question").text(this.getFlashcard().getQuestion());
    $("#question-number").text(this.questionNumber+1);
    $("#answer").text(this.getFlashcard().getAnswer());
    $("#point").text(this.user.getPoint());
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

  getPoint() {
    return this.point;
  }
}

