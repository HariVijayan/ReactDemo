interface Question {
    question: string;
    options: string[];
    correctAnswerIndex: number;
  }
  
  class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number;
    private score: number;
  
    constructor(questions: Question[]) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    public getCurrentQuestion(): Question {
      return this.questions[this.currentQuestionIndex];
    }
  
    public answerCurrentQuestion(answerIndex: number): boolean {
      const currentQuestion = this.getCurrentQuestion();
      if (answerIndex === currentQuestion.correctAnswerIndex) {
        this.score++;
        return true;
      }
      return false;
    }
  
    public goToNextQuestion(): boolean {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        return true;
      }
      return false;
    }
  
    public getScore(): number {
      return this.score;
    }
  }

  const questions: Question[] = [
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswerIndex: 0,
    },
    {
        question: "Which of the following is NOT a valid HTTP status code?",
        options: ["200", "404", "500", "303"],
        correctAnswerIndex: 3,
    },
    {
        question: "What does AJAX stand for?",
        options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous JavaScript and XHTML", "Automated JavaScript and XML"],
        correctAnswerIndex: 0,
    },
    {
        question: "What does API stand for in web development?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Protocol Interface"],
        correctAnswerIndex: 0,
    },
    {
        question: "Which HTML tag is used to define navigation links?",
        options: ["<nav>", "<navigation>", "<navbar>", "<menu>"],
        correctAnswerIndex: 0,
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Order Model"],
        correctAnswerIndex: 0,
    },
    {
        question: "What is the purpose of the 'viewport' meta tag in HTML?",
        options: ["To control the layout of the viewport", "To set the width of the viewport", "To optimize the viewport for mobile devices", "To define the background color of the viewport"],
        correctAnswerIndex: 2,
    },
    {
        question: "Which of the following is a CSS preprocessor?",
        options: ["JavaScript", "Sass", "HTML", "Python"],
        correctAnswerIndex: 1,
    },
    {
        question: "What does MVC stand for in the context of web development?",
        options: ["Model View Controller", "Model Variable Control", "Most Valuable Code", "Multi-View Configuration"],
        correctAnswerIndex: 0,
    },
    {
        question: "What does the 'async' attribute do in HTML script tags?",
        options: ["Loads the script asynchronously", "Defines the script as asynchronous", "Ensures the script loads before other elements", "Delays the execution of the script"],
        correctAnswerIndex: 0,
    }
  ];
  
  const quiz = new Quiz(questions);
  
  const questionElement: HTMLParagraphElement = document.getElementById('question') as HTMLParagraphElement;
  const optionsForm: HTMLFormElement = document.getElementById('options-form') as HTMLFormElement;
  const resultContainer: HTMLDivElement = document.getElementById('result-container') as HTMLDivElement;
  const nextButton: HTMLButtonElement = document.getElementById('next-btn') as HTMLButtonElement;
  const questionContainer: HTMLElement = document.getElementById('question-container') as HTMLElement; 
  
  function displayCurrentQuestion(): void {
    const currentQuestion = quiz.getCurrentQuestion();
    questionElement.textContent = currentQuestion.question;
    optionsForm.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement('li');
      const radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.name = 'option';
      radioButton.value = index.toString();
      li.appendChild(radioButton);
      li.appendChild(document.createTextNode(option)); 
      optionsForm.appendChild(li);
    });
  }
  
  nextButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked') as HTMLInputElement;
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }
    const answerIndex = parseInt(selectedOption.value);
    if (quiz.answerCurrentQuestion(answerIndex)) {
      displayAnswerFeedback(true); 
    } else {
      displayAnswerFeedback(false);
    }
    if (!quiz.goToNextQuestion()) {
      showResult();
    } else {
      displayCurrentQuestion();
    }
  });
  
  function displayAnswerFeedback(isCorrect: boolean): void {
    const previousFeedback = document.querySelector('#question-container p.feedback');
    if (previousFeedback) {
      previousFeedback.remove();
    }
  
    const feedback = document.createElement('p');
    feedback.textContent = isCorrect ? "Correct!" : "Incorrect!";
    feedback.classList.add('feedback');
    feedback.style.color = isCorrect ? "green" : "red";
    feedback.style.marginLeft = "7em";
  
    questionContainer.appendChild(feedback);
  }
  
  function showResult(): void {
    nextButton.style.display = 'none';
    questionElement.textContent = "Quiz Over!";
    optionsForm.innerHTML = '';
    resultContainer.textContent = "Your score: " + quiz.getScore();
  }
  
  displayCurrentQuestion();
  