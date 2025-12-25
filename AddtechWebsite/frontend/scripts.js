// ======================
// CONFIGURATION
// ======================
const API_BASE = "http://localhost:3000/api";

// ======================
// GLOBAL VARIABLES
// ======================
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let wrongAnswers = [];
let studentAnswers = [];
let selectedOptionIndex = -1;
let quizStartTime = null;

// ======================
// COMMON HELPERS
// ======================
function stopAudio() {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
}

function getSubjectIcon(subject) {
  return {
    science: "fa-flask",
    geography: "fa-globe",
    english: "fa-book",
    history: "fa-landmark"
  }[subject] || "fa-question";
}

function formatTopicName(topic) {
  return topic
    .split("-")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ======================
// LOGIN PAGE
// ======================
if (location.pathname.includes("index.html") || location.pathname === "/") {
 document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    if (!loginForm) return;

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        errorMessage.textContent = "";

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        try {
            const res = await fetch(`${API_BASE}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            console.log('data: ', data);

            if (!res.ok) {
                errorMessage.textContent = data.message || "Login failed";
                return;
            }

            // SAVE USER
            localStorage.setItem("studentId", data.data.id);
            localStorage.setItem("studentEmail", data.data.email);

            // REDIRECT
            window.location.href = "quiz.html";

        } catch (err) {
            console.log('err: ', err);
            errorMessage.textContent = "Server not reachable";
        }
    });
});
}

// ======================
// QUIZ PAGE
// ======================
if (location.pathname.includes("quiz.html")) {
  document.addEventListener("DOMContentLoaded", async () => {
    quizStartTime = new Date();

    const res = await fetch(`${API_BASE}/questions`);
    quizQuestions = (await res.json()).questions;

    loadQuestion();
  });
}

async function fetchQuestions() {
    try {
        const response = await fetch("https://your-api-endpoint.com/quiz"); // <-- replace with your API URL
        if (!response.ok) throw new Error("Failed to fetch questions from API");
        questions = await response.json();

        if (questions.length === 0) {
            alert("No questions available at the moment.");
            return;
        }

        // Start the quiz after fetching
        hideInstructions();
    } catch (error) {
        console.error(error);
        alert("Error fetching questions. Please try again later.");
    }
}


function loadQuestion() {
    const quizBox = document.getElementById("quizBox");
    const q = questions[currentQuestionIndex];

    quizBox.innerHTML = `
        <h3>${q.subject}: ${q.question}</h3>
        <ul class="options-list">
            ${q.options.map((opt, idx) => `<li><button onclick="submitAnswer(${idx})">${opt}</button></li>`).join('')}
        </ul>
    `;

    // Update progress
    document.getElementById("currentSubject").innerText = q.subject;
    document.getElementById("currentQuestion").innerText = currentQuestionIndex + 1;
}


function selectOption(i) {
  quizQuestions[currentQuestionIndex].options.forEach((_, idx) => {
    document.getElementById(`opt${idx}`).classList.remove("selected");
  });

  document.getElementById(`opt${i}`).classList.add("selected");
  selectedOptionIndex = i;
}

function checkAnswer() {
  if (selectedOptionIndex === -1) return alert("Select an answer");

  const q = quizQuestions[currentQuestionIndex];
  const selected = q.options[selectedOptionIndex];
  const correct = selected === q.correctAnswer;

  studentAnswers.push({
    question: q.question,
    answer: selected,
    correct,
    subject: q.subject,
    topic: q.topic
  });

  if (correct) {
    score++;
    currentQuestionIndex++;
    loadQuestion();
  } else {
    wrongAnswers.push({
      question: q.question,
      studentAnswer: selected,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    });

    showExplanation(q, selected);
  }
}

function showExplanation(q, selected) {
  stopAudio();

  document.getElementById("quizBox").innerHTML = `
    <h3>❌ Incorrect</h3>
    <p>Your answer: ${selected}</p>
    <p>Correct answer: ${q.correctAnswer}</p>
    <p>${q.explanation}</p>
    <button onclick="nextQuestion()">Next</button>
  `;

  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(q.audioText);
    speechSynthesis.speak(speech);
  }
}

function nextQuestion() {
  stopAudio();
  currentQuestionIndex++;
  loadQuestion();
}

// ======================
// SUBMIT QUIZ
// ======================
async function submitQuiz() {
  const subjectPerformance = {};

  studentAnswers.forEach(a => {
    if (!subjectPerformance[a.subject]) {
      subjectPerformance[a.subject] = { correct: 0, total: 0 };
    }
    subjectPerformance[a.subject].total++;
    if (a.correct) subjectPerformance[a.subject].correct++;
  });

  Object.keys(subjectPerformance).forEach(s => {
    const d = subjectPerformance[s];
    d.percentage = Math.round((d.correct / d.total) * 100);
  });

  const report = {
    studentEmail: localStorage.getItem("studentEmail"),
    studentName: localStorage.getItem("studentName"),
    score,
    totalQuestions: quizQuestions.length,
    wrongAnswers,
    subjectPerformance,
    date: new Date()
  };

  await fetch(`${API_BASE}/reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(report)
  });

  localStorage.setItem("quizReport", JSON.stringify(report));
  window.location.href = "report.html";
}

// ======================
// REPORT PAGE
// ======================
if (location.pathname.includes("report.html")) {
  document.addEventListener("DOMContentLoaded", () => {
    const report = JSON.parse(localStorage.getItem("quizReport"));
    if (!report) return (location.href = "index.html");

    document.getElementById("score").textContent =
      report.score + "/" + report.totalQuestions;

    const container = document.getElementById("subjects");
    container.innerHTML = "";

    Object.entries(report.subjectPerformance).forEach(([s, d]) => {
      container.innerHTML += `
        <div>
          <strong>${s.toUpperCase()}</strong> : ${d.percentage}%
        </div>
      `;
    });
  });
}

// ======================
// LOGOUT
// ======================
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
