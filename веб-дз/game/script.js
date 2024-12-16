const levelElements = ["Начальный", "Средний", "Продвинутый"];
let currentLevel = 0;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
const totalQuestions = 10;
let questions = [];

function startGame() {
    loadQuestions();
    displayQuestion();
    updateLevelDisplay();
}

function loadQuestions() {
    questions = [];
    for (let i = 0; i < totalQuestions; i++) {
        questions.push(generateQuestion());
    }
}

function generateQuestion() {
    let question = "";
    let answer;
    
    if (currentLevel === 0) { // Начальный
        const num1 = getRandomInt(1, 10);
        const num2 = getRandomInt(1, 10);
        const op = ['+', '-', '*'][getRandomInt(0, 3)];
        question = `${num1} ${op} ${num2}`;
        answer = eval(question);
    } else if (currentLevel === 1) { // Средний
        const num1 = getRandomInt(1, 10);
        const num2 = getRandomInt(1, 10);
        const op = ['+', '-', '*', '>', '<', '==='][getRandomInt(0, 6)];
        question = `${num1} ${op} ${num2}`;
        answer = eval(question);
    } else { // Продвинутый
        const num1 = getRandomInt(1, 10);
        const num2 = getRandomInt(1, 10);
        const logicOp = ['&&', '||'][getRandomInt(0, 2)];
        question = `${num1 > 5} ${logicOp} ${num2 > 5}`;
        answer = eval(question);
    }

    return { question, answer }; 
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('game').innerText = `Вопрос ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    document.getElementById('results').innerText = `Правильные: ${correctAnswers} Неправильные: ${wrongAnswers}`;
    document.getElementById('answer').value = '';
}
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    const currentQuestion = questions[currentQuestionIndex];

    let currentAnswer;
    if (typeof currentQuestion.answer === 'boolean') {
        currentAnswer = (userAnswer === 'true') ? true : false;
    } else {
        currentAnswer = Number(userAnswer);
    }
    
    if (currentAnswer === currentQuestion.answer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        displayQuestion();
    } else {
        evaluateLevel();
    }
}

function evaluateLevel() {
    const accuracy = (correctAnswers / totalQuestions) * 100;

    if (accuracy >= 80) {
        currentLevel++;
        if (currentLevel < levelElements.length) {
            alert(`Поздравляем, вы перешли на новый уровень: ${levelElements[currentLevel]}`);
            currentQuestionIndex = 0;
            correctAnswers = wrongAnswers = 0;
            loadQuestions();
            displayQuestion();
            updateLevelDisplay();

        } else {
            alert("Поздравляем, вы прошли все уровни игры!");
            showEndButtons();
        }
    } else {
        alert("К сожалению, вы не прошли уровень. Попробуйте снова!");
        showEndButtons();
    }
}

function updateLevelDisplay() {
    document.getElementById('level').innerText = `Уровень: ${levelElements[currentLevel]}`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function restartGame() {
    currentLevel = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;
    startGame();
    document.getElementById('restart').style.display = 'none';
    document.getElementById('exit').style.display = 'none';
}

function exitGame() {
    window.close();
}

function showEndButtons() {
    document.getElementById('restart').style.display = 'inline';
    document.getElementById('exit').style.display = 'inline';
}

startGame();
