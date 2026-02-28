/* ====================================
   exam.js — Controls the CBT question flow
   ==================================== */

// Question limits
const FREE_LIMIT = 20;
const PREMIUM_LIMIT = 154;
const PREMIUM_BATCH = 30; // Only 30 questions shown each time

let currentQuestion = 0;
let userAnswers = [];

let isPremium = localStorage.getItem("isPremium") === "true";
let questionsToShow;

// -----------------------------
// Load correct question set
// -----------------------------
if (!isPremium) {
  // Free users
  questionsToShow = jambNovelQuestions.slice(0, FREE_LIMIT);
} else {
  // Premium users — 30 at a time
  let batchCount = parseInt(localStorage.getItem("premiumBatch") || "0");
  const start = batchCount * PREMIUM_BATCH;
  const end = start + PREMIUM_BATCH;

  if (start >= PREMIUM_LIMIT) {
    // Reset when all 154 covered
    localStorage.setItem("premiumBatch", "0");
    questionsToShow = jambNovelQuestions.slice(0, PREMIUM_BATCH);
  } else {
    questionsToShow = jambNovelQuestions.slice(start, end);
    localStorage.setItem("premiumBatch", batchCount + 1);
  }
}

const questions = questionsToShow;

// -----------------------------
// Elements
// -----------------------------
const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const progressFill = document.getElementById("progress-fill");

// -----------------------------
// Display first question
// -----------------------------
window.onload = () => {
  showQuestion(currentQuestion);
};

// -----------------------------
// Display a question
// -----------------------------
function showQuestion(index) {
  const q = questions[index];
  questionNumber.textContent = `Question ${index + 1} of ${questions.length}`;
  questionText.textContent = q.question;

  // Clear old options
  optionsContainer.innerHTML = "";

  // Load new options
  q.options.forEach((opt) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = opt;
    button.onclick = (e) => selectOption(opt, e);
    if (userAnswers[index] === opt) button.classList.add("selected");
    optionsContainer.appendChild(button);
  });

  // Button control
  prevBtn.disabled = index === 0;
  nextBtn.style.display = index === questions.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = index === questions.length - 1 ? "inline-block" : "none";

  // Update progress bar
  const progressPercent = ((index + 1) / questions.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
}

// -----------------------------
// Save user choice
// -----------------------------
function selectOption(selected, event) {
  userAnswers[currentQuestion] = selected;
  const allOptions = document.querySelectorAll(".option-btn");
  allOptions.forEach((btn) => btn.classList.remove("selected"));
  event.target.classList.add("selected");
}

// -----------------------------
// Navigation buttons
// -----------------------------
nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

submitBtn.addEventListener("click", finishExam);

// -----------------------------
// Submit test and go to result
// -----------------------------
function finishExam() {
  let score = 0;
  const results = [];

  questions.forEach((q, i) => {
    const correct = userAnswers[i] === q.answer;
    if (correct) score++;
    results.push({
      question: q.question,
      userAnswer: userAnswers[i] || "No answer",
      correctAnswer: q.answer,
      explanation: q.explanation,
      reference: q.reference,
      correct,
    });
  });

  const examResult = {
    score,
    total: questions.length,
    date: new Date().toLocaleString(),
    results,
  };

  localStorage.setItem("lastExamResult", JSON.stringify(examResult));
  window.location.href = "result.html";
}