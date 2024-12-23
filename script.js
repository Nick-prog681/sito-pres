let currentQuestion = 0;
const questions = [
    {
        question: "Qual è il tuo piatto natalizio preferito?",
        answers: ["Tortellini in brodo", "Panettone", "Arrosto di Natale"],
        correctAnswer: 1
    },
    {
        question: "Quale di queste canzoni natalizie ti fa ballare?",
        answers: ["Jingle Bells", "All I Want for Christmas Is You", "Jingle Bells ma cantata da Ale"],
        correctAnswer: 2
    },
    {
        question: "Band preferita",
        answers: ["Pinguini Tattici Nucleari", "AC-DC", "I Pooh"],
        correctAnswer: 0
    }
];

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    const buttons = document.querySelectorAll('.answer');
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
    });
}

function answerQuestion(answerIndex) {
    const question = questions[currentQuestion];
    if (answerIndex === question.correctAnswer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Riprova! Rispondi correttamente alle domande.");
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    // Mostrare il PDF
    document.getElementById('gift-message').innerHTML = `
        <p>Complimenti! Il tuo regalo di Natale è un biglietto per il concerto!</p>
        <p>Scarica il PDF con tutti i dettagli qui sotto:</p>
        <iframe src="https://drive.google.com/file/d/1B6qOwMepkP99C-LwResndcfpkWP4r6Jn/preview" width="100%" height="500px"></iframe>
        <br>
        <a href="https://drive.google.com/file/d/1B6qOwMepkP99C-LwResndcfpkWP4r6Jn/view?usp=sharing" target="_blank">Clicca qui per scaricare il PDF</a>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}
