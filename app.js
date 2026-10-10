
const subjects = [
  {
    name: "Soil Science",
    description: "Soil properties and fertility",
    icon: "01",
    questions: [
      {
        q: "Which soil particle is the largest?",
        choices: ["Clay", "Silt", "Sand", "Humus"],
        answer: 2,
        explain: "Sand has larger mineral particles than silt and clay."
      },
      {
        q: "What is the main function of soil organic matter?",
        choices: [
          "To remove all soil organisms",
          "To improve soil structure and nutrient retention",
          "To make every soil alkaline",
          "To stop water infiltration"
        ],
        answer: 1,
        explain: "Organic matter helps improve soil structure, water retention, and nutrient availability."
      },
      {
        q: "Which soil pH is considered neutral?",
        choices: ["3", "5", "7", "10"],
        answer: 2,
        explain: "A pH of approximately 7 is neutral."
      }
    ]
  },
  {
    name: "Crop Science",
    description: "Crop growth and production",
    icon: "02",
    questions: [
      {
        q: "Which plant part primarily absorbs water and minerals?",
        choices: ["Flower", "Root", "Fruit", "Seed coat"],
        answer: 1,
        explain: "Roots absorb water and mineral nutrients from the soil."
      },
      {
        q: "What is the main green pigment involved in photosynthesis?",
        choices: ["Chlorophyll", "Hemoglobin", "Melanin", "Keratin"],
        answer: 0,
        explain: "Chlorophyll absorbs light energy used in photosynthesis."
      },
      {
        q: "Which is a cereal crop?",
        choices: ["Mango", "Corn", "Coffee", "Cacao"],
        answer: 1,
        explain: "Corn is a cereal crop belonging to the grass family."
      }
    ]
  },
  {
    name: "Plant Pathology",
    description: "Plant diseases and their causes",
    icon: "03",
    questions: [
      {
        q: "Aspergillus flavus is classified as which type of organism?",
        choices: ["Bacterium", "Fungus", "Nematode", "Virus"],
        answer: 1,
        explain: "Aspergillus flavus is a fungus that can affect crops and produce aflatoxins under suitable conditions."
      },
      {
        q: "What is a plant disease symptom?",
        choices: [
          "A visible or measurable response of the plant to disease",
          "A type of fertilizer",
          "A soil texture class",
          "A harvesting tool"
        ],
        answer: 0,
        explain: "Symptoms are plant responses, such as wilting, chlorosis, or necrosis."
      },
      {
        q: "Which practice can help reduce the spread of some plant diseases?",
        choices: [
          "Using infected seeds",
          "Ignoring field sanitation",
          "Cleaning tools and using healthy planting materials",
          "Planting diseased crops repeatedly"
        ],
        answer: 2,
        explain: "Sanitation and healthy planting materials can help reduce disease spread."
      }
    ]
  },
  {
    name: "Agronomy",
    description: "Crop management and field practices",
    icon: "04",
    questions: [
      {
        q: "What does crop rotation involve?",
        choices: [
          "Growing the same crop continuously",
          "Growing different crops in sequence on the same land",
          "Harvesting without planting",
          "Applying fertilizer every day"
        ],
        answer: 1,
        explain: "Crop rotation changes the crop grown in a field over successive seasons."
      },
      {
        q: "Which is an example of a legume?",
        choices: ["Rice", "Corn", "Mung bean", "Sugarcane"],
        answer: 2,
        explain: "Mung bean is a legume. Many legumes form associations with nitrogen-fixing bacteria."
      },
      {
        q: "What is seed germination?",
        choices: [
          "The development of a seed into a growing seedling",
          "The drying of harvested grain",
          "The removal of weeds",
          "The storage of farm tools"
        ],
        answer: 0,
        explain: "Germination begins when a viable seed resumes growth under suitable conditions."
      }
    ]
  }
];

const reviewers = [
  {
    title: "Soil Science",
    text: "Soil texture depends on the proportions of sand, silt, and clay. Soil structure describes how soil particles are arranged into aggregates. Soil pH affects nutrient availability and microbial activity."
  },
  {
    title: "Crop Science",
    text: "Photosynthesis converts light energy into chemical energy. Roots absorb water and minerals, stems support the plant and transport materials, and leaves are major sites of photosynthesis."
  },
  {
    title: "Plant Pathology",
    text: "Plant diseases may be caused by fungi, bacteria, viruses, nematodes, and other agents. Disease management can include resistant varieties, sanitation, crop rotation, and healthy planting materials."
  },
  {
    title: "Agronomy",
    text: "Agronomy applies plant and soil science to crop production. Important practices include land preparation, seed selection, planting, nutrient management, weed control, irrigation, and harvesting."
  }
];

const $ = id => document.getElementById(id);

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn("Unable to save data on this device.");
  }
}

let stats = load("bsa-stats", { answered: 0, correct: 0 });
let history = load("bsa-history", []);
let personalNotes = load("bsa-notes", "");
let currentSubject = null;
let questionIndex = 0;
let selectedAnswer = null;
let checked = false;
let quizCorrect = 0;
let quizFinished = false;

function renderStats() {
  const accuracy = stats.answered
    ? Math.round(stats.correct / stats.answered * 100)
    : 0;

  $("answered").textContent = stats.answered;
  $("correct").textContent = stats.correct;
  $("accuracy").textContent = accuracy + "%";

  $("scoreAnswered").textContent = stats.answered;
  $("scoreCorrect").textContent = stats.correct;
  $("scoreAccuracy").textContent = accuracy + "%";

  $("history").replaceChildren();

  if (!history.length) {
    const message = document.createElement("p");
    message.className = "muted";
    message.textContent = "No completed quizzes yet.";
    $("history").append(message);
    return;
  }

  history.slice(0, 10).forEach(item => {
    const row = document.createElement("div");
    row.className = "history-item";
    row.textContent =
      `${item.subject} · ${item.correct}/${item.total} correct · ${item.date}`;
    $("history").append(row);
  });
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(section => {
    section.classList.toggle("hidden", section.id !== page);
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.page === page);
  });

  if (page === "scores") renderStats();
  window.scrollTo(0, 0);
}

function renderSubjects() {
  $("subjects").replaceChildren();

  subjects.forEach((subject, index) => {
    const button = document.createElement("button");
    button.className = "subject";

    const info = document.createElement("span");
    const number = document.createElement("small");
    const title = document.createElement("strong");
    const description = document.createElement("small");

    number.textContent = "SUBJECT " + subject.icon;
    title.textContent = subject.name;
    description.textContent =
      subject.description + " · " + subject.questions.length + " questions";

    info.append(number, title, description);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.textContent = "›";

    button.append(info, arrow);
    button.addEventListener("click", () => startQuiz(index));
    $("subjects").append(button);
  });
}

function startQuiz(index) {
  currentSubject = subjects[index];
  questionIndex = 0;
  selectedAnswer = null;
  checked = false;
  quizCorrect = 0;
  quizFinished = false;

  $("quizSubject").textContent = currentSubject.name.toUpperCase();
  $("quizTitle").textContent = currentSubject.name + " Quiz";
  showPage("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = currentSubject.questions[questionIndex];

  selectedAnswer = null;
  checked = false;

  $("questionProgress").textContent =
    `Question ${questionIndex + 1} of ${currentSubject.questions.length}`;

  $("questionText").textContent = question.q;
  $("feedback").textContent = "";
  $("progressBar").style.width =
    (questionIndex / currentSubject.questions.length * 100) + "%";

  $("nextQuestion").disabled = true;
  $("nextQuestion").textContent = "Check answer";
  $("choices").replaceChildren();

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = String.fromCharCode(65 + index) + ". " + choice;

    button.addEventListener("click", () => {
      if (checked) return;

      selectedAnswer = index;

      document.querySelectorAll(".choice").forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
      $("nextQuestion").disabled = false;
    });

    $("choices").append(button);
  });
}

function finishQuiz() {
  quizFinished = true;

  history.unshift({
    subject: currentSubject.name,
    correct: quizCorrect,
    total: currentSubject.questions.length,
    date: new Date().toLocaleDateString()
  });

  history = history.slice(0, 30);

  save("bsa-history", history);
  save("bsa-stats", stats);
  renderStats();

  $("progressBar").style.width = "100%";
  $("questionProgress").textContent = "Quiz completed";
  $("questionText").textContent = "You finished the quiz!";
  $("choices").replaceChildren();

  $("feedback").textContent =
    `Your score: ${quizCorrect} out of ${currentSubject.questions.length}.`;

  $("nextQuestion").disabled = false;
  $("nextQuestion").textContent = "Back to subjects";
}

function nextStep() {
  if (quizFinished) {
    showPage("home");
    return;
  }

  if (!checked) {
    if (selectedAnswer === null) return;

    checked = true;

    const question = currentSubject.questions[questionIndex];
    const correct = selectedAnswer === question.answer;

    stats.answered++;

    if (correct) {
      stats.correct++;
      quizCorrect++;
    }

    save("bsa-stats", stats);
    renderStats();

    document.querySelectorAll(".choice").forEach((button, index) => {
      button.disabled = true;

      if (index === question.answer) {
        button.classList.add("correct");
      } else if (index === selectedAnswer) {
        button.classList.add("wrong");
      }
    });

    $("feedback").textContent =
      (correct ? "Correct! " : "Not quite. ") + question.explain;

    $("nextQuestion").textContent =
      questionIndex === currentSubject.questions.length - 1
        ? "Finish quiz"
        : "Next question";

    return;
  }

  if (questionIndex < currentSubject.questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function renderReviewers() {
  $("reviewers").replaceChildren();

  reviewers.forEach(item => {
    const card = document.createElement("article");
    card.className = "reviewer";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const content = document.createElement("p");
    content.textContent = item.text;

    card.append(title, content);
    $("reviewers").append(card);
  });
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => showPage(tab.dataset.page));
});

$("backSubjects").addEventListener("click", () => showPage("home"));
$("nextQuestion").addEventListener("click", nextStep);

$("personalNotes").value = personalNotes;

$("saveNotes").addEventListener("click", () => {
  personalNotes = $("personalNotes").value;
  save("bsa-notes", personalNotes);
  $("notesMessage").textContent = "Your notes have been saved on this device.";
});

$("resetScores").addEventListener("click", () => {
  if (!window.confirm("Reset all quiz scores and history?")) return;

  stats = { answered: 0, correct: 0 };
  history = [];

  save("bsa-stats", stats);
  save("bsa-history", history);
  renderStats();
});

renderSubjects();
renderReviewers();
renderStats();

if (window.Telegram && window.Telegram.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}
