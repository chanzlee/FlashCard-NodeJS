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
        if (status === true) 
            return this.questions[this.questionNumber];
        else
            return new Error("Game over");
    }

    checkAnswer(userAnswer) {
        this.user.setUserAnswer(userAnswer);
        if (this.getFlashcard().getAnswer() === userAnswer) {
            this.user.increasePoint(); 
        } 
        else {
            this.user.decreasePoint();
        }
    }

    startFlashcards() {
        this.questionNumber = 0;
        setInterval(() => {
            if (this.questionNumber === this.questions.length) {
                if (this.questions[this.questionNumber-1].userAnswer === "") {
                    decreasePoint();
                }
                //if current card is the last one
                this.status = false;
                clearInterval();    
            }
            else {
                if (this.questions[this.questionNumber-1].userAnswer === "") {
                    decreasePoint();
                }
                this.questionNumber++;
            }
        }, 5000);
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
    
    increasePoint() {
        this.point += 2;
    }
    
    decreasePoint() {
        this.point -= 1;
    }
}