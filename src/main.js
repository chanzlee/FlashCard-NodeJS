import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FlashcardDeque, Flashcard, User } from "./flashcard.js";

$(document).ready(function() {
  $("#game").hide();
  $("#user-answer").hide();
  $("#point-field").hide();
  $("#answer").hide();
  let deque;
  let user;

  $("#start").click(function() {
    $("#start-menu").hide();
    $("#game").show();
    $("#user-answer").show();
    $("#point-field").show();

    user = new User("Hyewon");
    let flashcards = [];
    flashcards.push(new Flashcard("Q1", "A1", 2));
    flashcards.push(new Flashcard("Q2", "A2", 2));
    flashcards.push(new Flashcard("Q3", "A3", 2));
    flashcards.push(new Flashcard("Q4", "A4", 2));
    flashcards.push(new Flashcard("Q5", "A5", 2));
    flashcards.push(new Flashcard("Q6", "A6", 2));
    flashcards.push(new Flashcard("Q7", "A7", 2));
    flashcards.push(new Flashcard("Q8", "A8", 2));
    flashcards.push(new Flashcard("Q9", "A9", 2));
    flashcards.push(new Flashcard("Q10", "A10", 2));
    deque = new FlashcardDeque(flashcards, 5000, user);

    $("#question-number").text(deque.questionNumber+1);
    $("#question").text(deque.getFlashcard().getQuestion());
    $("#answer").text(deque.getFlashcard().getAnswer());
    $("#point").text(user.getPoint());

    deque.startFlashcards();
  });

  $("#user-answer").submit(function(event){
    event.preventDefault();
    let userInput = $("#user-input").val();
    let priorScore = user.getPoint();
    deque.checkAnswer(userInput);
    if (priorScore < user.getPoint()) {
      $("#check").text("CORRECT!");
    } else {
      $("#check").text("WRONG!");
    }
    
    $("#question").hide();
    $("#answer").show();
    $("#point").text(user.getPoint());
  });
});
