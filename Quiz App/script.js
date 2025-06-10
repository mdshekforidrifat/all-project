const questions = [
  {
    question: "What is the capital of Australia?",
    anwser: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    anwser: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    anwser: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    anwser: [
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Great White Shark", correct: false },
      { text: "Blue Whale", correct: true },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    anwser: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "5", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const anwserButton = document.getElementById("anwser-button");
const nextBtn = document.getElementById("next-btn");

let curentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  curentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let curentQuestion = questions[curentQuestionIndex];
  let questionNo = curentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + curentQuestion.question;

  curentQuestion.anwser.forEach((anwser) => {
    let button = document.createElement("button");
    button.innerHTML = anwser.text;
    button.classList.add("btn");
    anwserButton.appendChild(button);
    if (anwser.correct) {
      button.dataset.correct = anwser.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct == "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(anwserButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  while (anwserButton.firstChild) {
    anwserButton.removeChild(anwserButton.firstChild);
  }
}

function showScroe() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  curentQuestionIndex++;
  if (curentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScroe();
  }
}

nextBtn.addEventListener("click", () => {
  if (curentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
