var questions = [
    {
        question: "Which is the best way to define variable in javascript?",
        answers: {
            a: "int a = 5",
            b: "b = 0",
            c: "boolean c = true",
            d: "var age = 10"
        },
        correctAnswer: "d"
    },
    {
        question: "Which module is used for mathematical functions?",
        answers: {
            a: "String",
            b: "Math",
            c: "Integer",
            d: "none of above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which keyword is used for creating a loop?",
        answers: {
            a:"for",
            b:"this",
            c:"var",
            d:"switch"
        },
        correctAnswer : "a"
    },
    {
        question: "Which of the following is true?",
        answers: {
            a:"Javascript is a compiler based language",
            b:"In javascript data type is required to create variable",
            c:"Array by default returns an object",
            d:"You need a cann't creaate any HTML element"
        },
        correctAnswer : "c"
    },
    {
        question: "From following which keyword is used to stop a loop?",
        answers: {
            a:"none",
            b:"off",
            c:"break",
            d:"shutdown"
        },
        correctAnswer : "c"
    },
    {
        question: "How to define while loop in javascript?",
        answers: {
            a:"while{ console.log('hello')}",
            b:"while(5<10){console.log('hello')}",
            c:"while[]",
            d:"{}while"
        },
        correctAnswer : "b"
    },
    {
        question: "Best way to create an element through javascript?",
        answers: {
            a:"document.write('<p>')",
            b:"document.createTextNode('p')",
            c:"document.createElement('p')",
            d:"createElement('p')"
        },
        correctAnswer : "c"
    },
    {
        question: "What is DOM",
        answers: {
            a:"Document Object Method",
            b:"Document Object Minutes",
            c:"Document Old Method",
            d:"Document Object Model"
        },
        correctAnswer : "d"
    },
    {
        question: "How to display something on console?",
        answers: {
            a:"console.println('hello')",
            b:"console.write('hello')",
            c:"System.print('hello')",
            d:"console.log('hello')"
        },
        correctAnswer : "d"

    },
    {
        question: "What is an Array?",
        answers: {
            a:"A collection",
            b:"A component ",
            c:"A method",
            d:"A function"
        },
        correctAnswer : "a"
    }
]

//page 2 javascript variables
var q = document.getElementById("q");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var pa = document.getElementById("pa");
var pb = document.getElementById("pb");
var pc = document.getElementById("pc");
var pd = document.getElementById("pd");
var questionCounter = 0;
var nextbtn = document.getElementById("nextbtn")
var selectedAnswers = [];

q.innerHTML = "Q1. "+questions[0].question;
pa.innerHTML = questions[0].answers.a;
pb.innerHTML = questions[0].answers.b;
pc.innerHTML = questions[0].answers.c;
pd.innerHTML = questions[0].answers.d;

// console.log(questions[0].answers.a)
// console.log(a.childNodes)



function checkAndNext(status) {
    var innerResult = ""
    if (a.checked || b.checked || c.checked || d.checked) {
        // console.log(a.checked)
        // console.log(b.checked)
        // console.log(c.checked)
        // console.log(d.checked)
        if (a.checked) {
            innerResult = "a"
            selectedAnswers.push(innerResult)

        }
        else if (b.checked) {
            innerResult = "b"
            selectedAnswers.push(innerResult)
        }
        else if (c.checked) {
            innerResult = "c"
            selectedAnswers.push(innerResult)
        }
        else if (d.checked) {
            innerResult = "d"
            selectedAnswers.push(innerResult)
        }
        questionCounter++
        questionLoader();
        // selectedAnswers.push(innerResult)
    }
    else {
        alert("Please select atleast one answer")
    }
    // console.log(innerResult)
    return innerResult

}

function questionLoader() {
    if (questionCounter > (questions.length - 1)) {
        resultPage()
    }
    else if (questionCounter > (questions.length - 2)) {
        a.checked = false;
        b.checked = false;
        c.checked = false;
        d.checked = false;
        q.innerHTML = "Q"+String((questionCounter+1))+". "+questions[questionCounter].question;
        pa.innerHTML = questions[questionCounter].answers.a;
        pb.innerHTML = questions[questionCounter].answers.b;
        pc.innerHTML = questions[questionCounter].answers.c;
        pd.innerHTML = questions[questionCounter].answers.d;
        nextbtn.innerHTML = "Complete"      //ensure completion button
    }
    else {
        a.checked = false;
        b.checked = false;
        c.checked = false;
        d.checked = false;
        q.innerHTML = "Q"+String((questionCounter+1))+". "+questions[questionCounter].question;
        pa.innerHTML = questions[questionCounter].answers.a;
        pb.innerHTML = questions[questionCounter].answers.b;
        pc.innerHTML = questions[questionCounter].answers.c;
        pd.innerHTML = questions[questionCounter].answers.d;
    }

    // console.log(questions[questionCounter].answers)

}



function resultPage() {
    var noOfQuestions = questions.length;
    var correctAnswers = 0;
    // console.log(selectedAnswers)
    for (var i = 0; i < selectedAnswers.length; i++) {
        console.log((i + 1) + " answer is " + (questions[i].correctAnswer == selectedAnswers[i]))
        if (questions[i].correctAnswer == selectedAnswers[i]) {
            correctAnswers++
        }
        else {
        }

    }
    document.write("<html lang='en'>");
    document.write("<head>");
    document.write("<meta charset='UTF-8'>");
    document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>")
    document.write("<link rel='stylesheet' href='css/style.css'>");
    document.write("<link rel='stylesheet' href='css/bootstrap.min.css'>")
    document.write("<link rel='stylesheet' href='css/font-awesome.min.css'>");
    document.write("<title>Result Card</title>")
    document.write("</head>");
    document.write("<body>");


    document.write("<div class='container-fluid'>");
    document.write("<div class='bg-primary row'>")
    document.write("<div class='text-center col-lg-12 col-md-12 col-sm-12'>")
    document.write("<img src='images/Saylani-logo.png' class='img-fluid mb-5' alt=''>");
    document.write("<h2 class='text-light'>Sylani Welfare Trust</h2>")
    document.write("<h2 class='text-light'>Javascript Quiz Result</h2>")
    document.write("</div>");
    document.write("</div>");
    document.write("<br><br>");
    document.write("<div class='row'>")
    document.write("<div class='left col-lg-12 col-md-12 col-sm-12'>");
    document.write("<h4>Correct Answers: "+correctAnswers+"</h4>")
    document.write("<h4>Percentage: "+(correctAnswers / noOfQuestions) * 100 + "%"+"</h4>");
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
    document.write("</body>");
    document.write("</html>");
    









    console.log("total correct answers are " + correctAnswers)
    console.log("percentage is " + (correctAnswers / noOfQuestions) * 100 + "%")
}