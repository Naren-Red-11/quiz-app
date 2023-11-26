const quizData = [
    {
        question: "How old is Narendra?",
        a: "10",
        b: "17",
        c: "20",
        d: "100",
        correct: 'c'
    },
    {
        question: "What is the most used programming language in 2019?",
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: "Who is the president of USA?",
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: "What does CPU stand for?",
        a: "Central Processing Unit",
        b: "Computer Processing Unit",
        c: "Central Power Unit",
        d: "Control Processing Unit",
        correct: 'a'
    },
    {
        question: "What is the purpose of a firewall in a computer network?",
        a: "To protect against viruses",
        b: "To regulate internet speed",
        c: "To block unauthorized access",
        d: "To improve hardware performance",
        correct: 'c'
    },
    {
        question: "Which file format is used for compressed files?",
        a: ".zip",
        b: ".exe",
        c: ".docx",
        d: ".png",
        correct: 'a'
    },
    {
        question: "What does LAN stand for in computing?",
        a: "Local Access Network",
        b: "Long Area Network",
        c: "Local Area Network",
        d: "Large Access Network",
        correct: 'c'
    },
    {
        question: "What protocol is used for sending emails over the Internet?",
        a: "FTP",
        b: "SMTP",
        c: "HTTP",
        d: "POP",
        correct: 'b'
    },
    {
        question: "Which of these is a type of malware?",
        a: "BIOS",
        b: "RAM",
        c: "Trojan",
        d: "GPU",
        correct: 'c'
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Transfer Markup Language",
        b: "Hyper Text Markup Language",
        c: "Hyperlinking Text Markup Language",
        d: "Hyper Tool Markup Language",
        correct: 'b'
    }
];
let currentQuestion = 0;
let score = 0;
let answer = undefined;

const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answers = document.querySelectorAll('.answer');

loadQuiz();

const submitBtn = document.getElementById('btn');
function loadQuiz() {

    const currentQuestionData = quizData[currentQuestion];
    questionE1.innerHTML = currentQuestionData.question;
    a_text.innerHTML = currentQuestionData.a;
    b_text.innerHTML = currentQuestionData.b;
    c_text.innerHTML = currentQuestionData.c;
    d_text.innerHTML = currentQuestionData.d;

}

function getSelected() {
    // console.log("hi")

    let answer = undefined;
    answers.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });

    return answer;
}

function deSelect() {
    answers.forEach((answerE1) => {
        if (answerE1.checked) {
            answerE1.checked = false;
        }
    })
}
submitBtn.addEventListener('click', () => {



    answer = getSelected();
    // console.log(answer);


    if (answer) {
        deSelect()
        if (answer == quizData[currentQuestion].correct) {
            score += 1;
        }
        currentQuestion++;
        if (currentQuestion == quizData.length) {

            quiz.innerHTML = `<h2>Your Score ${score} /10</h2>
            <button id="r-btn">Retake quiz</button>`;
            quiz.style.padding = "20px";
            quiz.style.textAlign = "center";
            const reload = document.getElementById('r-btn');
            reload.addEventListener('click', (event) => {
                location.reload();
            })

        }
        if (currentQuestion == (quizData.length - 1)) {
            submitBtn.innerHTML = "Submit"
        }
        loadQuiz();
    } else {
        alert("You need to select one of the four options!");
    }
})
