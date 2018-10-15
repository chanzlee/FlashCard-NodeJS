import { FlashcardDeque, Flashcard, User } from "../src/flashcard.js";

describe("Flashcard", function() {
    let deque;
    let user;
    beforeEach(function() {
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
        jasmine.clock().install();
    });

    afterEach(function() {
       jasmine.clock().uninstall(); 
    });

    it ("User can answer the questions written on flash cards.", function(){
        deque.startFlashcards();
        deque.checkAnswer("A1");
        expect(user.getPoint()).toEqual(2);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A2");
        expect(user.getPoint()).toEqual(4);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A3");
        expect(user.getPoint()).toEqual(6);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A4");
        expect(user.getPoint()).toEqual(8);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A5");
        expect(user.getPoint()).toEqual(10);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A6");
        expect(user.getPoint()).toEqual(12);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A7");
        expect(user.getPoint()).toEqual(14);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A8");
        expect(user.getPoint()).toEqual(16);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A9");
        expect(user.getPoint()).toEqual(18);
        jasmine.clock().tick(5000);
        deque.checkAnswer("A10");
        expect(user.getPoint()).toEqual(20);
    });

    it ("User will get points if they answer the question correctly.", function() {
        deque.startFlashcards();
        deque.checkAnswer("A1");
        expect(user.getPoint()).toEqual(2);

        jasmine.clock().tick(5000);
        deque.checkAnswer("A2");
        expect(user.getPoint()).toEqual(4);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A3");
        expect(user.getPoint()).toEqual(6);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A4");
        expect(user.getPoint()).toEqual(8);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("B5");
        expect(user.getPoint()).toEqual(6);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A6");
        expect(user.getPoint()).toEqual(8);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A7");
        expect(user.getPoint()).toEqual(10);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A8");
        expect(user.getPoint()).toEqual(12);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A9");
        expect(user.getPoint()).toEqual(14);

        jasmine.clock().tick(5000);
        deque.checkAnswer("A10");
        expect(user.getPoint()).toEqual(16);
    });

    it ("User will lose points if they fail to answer the question correctly.", function() {
        deque.startFlashcards();
        deque.checkAnswer("A1");
        expect(user.getPoint()).toEqual(2);

        jasmine.clock().tick(5000);
        deque.checkAnswer("A2");
        expect(user.getPoint()).toEqual(4);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A3");
        expect(user.getPoint()).toEqual(6);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A4");
        expect(user.getPoint()).toEqual(8);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("B5");
        expect(user.getPoint()).toEqual(6);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A6");
        expect(user.getPoint()).toEqual(8);
    
        jasmine.clock().tick(5000);
        deque.checkAnswer("A7");
        expect(user.getPoint()).toEqual(10);
    
        jasmine.clock().tick(5000);
        jasmine.clock().tick(5000);
        expect(user.getPoint()).toEqual(8);
        deque.checkAnswer("A9");
        expect(user.getPoint()).toEqual(10);

        jasmine.clock().tick(5000);
        jasmine.clock().tick(5000);
        expect(user.getPoint()).toEqual(8);
    });
});