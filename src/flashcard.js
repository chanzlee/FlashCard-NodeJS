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
    if (this.getFlashcard().getAnswer() === userAnswer) {
      this.user.increasePoint(this.getFlashcard().getPoint()); 
    } 
    else {
      this.user.decreasePoint(this.getFlashcard().getPoint());
    }
  }

  startFlashcards() {
    this.questionNumber = 0;
    setTimeout(function() {
        return startInteval;
    }, this.interval);
    let startInteval = setInterval(() => {
      if (this.questionNumber === this.questions.length) {
        if (this.questions[this.questionNumber].getUserAnswer() === "") {
          this.user.decreasePoint(this.getFlashcard().getPoint());
        }
        //if current card is the last one
        this.status = false;
        clearInterval();    
      }
      else {
        if (this.questions[this.questionNumber].getUserAnswer() === "") {
          this.user.decreasePoint(this.getFlashcard().getPoint());
        }
        this.questionNumber++;
      }
    }, this.interval);
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