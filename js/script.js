var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

var app = {
    questions:[
        {
            q: 'HTML stands for?',
            options:['Hyper Text Markup Language','High Text Markup Language','Hyper Tabular Markup Language','None of these'],
            answer: 1
        },
        {
            q: 'which of the following tag is used to mark a begining of paragraph ?',
            options:['&lt;TD&gt;','&lt;br&gt;','&lt;P&gt;','&lt;TR&gt;'],
            answer: 3
        },
        {
            q: 'From which tag descriptive list starts ?',
            options:['&lt;LL&gt;','&lt;DD&gt;','&lt;DL&gt;','&lt;DS&gt;'],
            answer: 3
        },
        {
            q: 'Correct HTML tag for the largest heading is',
            options:['&lt;head&gt;','&lt;h6&gt;','&lt;heading&gt;','&lt;h1&gt;'],
            answer: 4
        },
        {
            q: 'The attribute of &lt;form&gt; tag',
            options:['Method','Action','Both (a)&(b)','None of these'],
            answer: 3
        },
        {
            q: 'Markup tags tell the web browser',
            options:['How to organise the page','How to display the page','How to display message box on page','None of these'],
            answer: 2
        },
        {
            q: 'www is based on which model?',
            options:['Local-server','Client-server','3-tier','None of these'],
            answer: 2
        },
        {
            q: 'What are Empty elements and is it valid?',
            options:['No, there is no such terms as Empty Element','Empty elements are element with no data','No, it is not valid to use Empty Element','None of these'],
            answer: 2
        },
        {
            q: 'Which of the following attributes of text box control allow to limit the maximum character?',
            options:['size','len','maxlength','all of these'],
            answer: 3
        },
        {
            q: 'Web pages starts with which ofthe following tag?',
            options:['&lt;Body&gt;','&lt;Title&gt;','&lt;HTML&gt;','&lt;Form&gt;'],
            answer: 3
        },
        {
            q: 'HTML is a subset of',
            options:['SGMT','SGML','SGMD','None of these'],
            answer: 2
        },
        {
            q: 'Which of the following is a container?',
            options:['&lt;SELECT&gt;','&lt;BODY&gt;','&lt;INPUT&gt;','Both (a) and (b)'],
            answer: 4
        },
        {
            q: 'The attribute, which define the relationship between current document and HREFed URL is',
            options:['REL','URL','REV','all of these'],
            answer: 1
        },
        {
            q: '&lt;DT&gt; tag is designed to fit a single line of our web page but &lt;DD&gt; tag will accept a',
            options:['line of text','full paragraph','word','request'],
            answer: 2
        },
        {
            q: 'Character encoding is',
            options:['method used to represent numbers in a character','method used to represent character in a number','a system that consists of a code which pairs each character with a pattern','none of these'],
            answer: 3
        },
    ],
    index: 0,
    load:function() {
        if (this.index <= this.questions.length - 1) {
            quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
            op1.innerHTML = this.questions[this.index].options[0];
            op2.innerHTML = this.questions[this.index].options[1];
            op3.innerHTML = this.questions[this.index].options[2];
            op4.innerHTML = this.questions[this.index].options[3];
        }
        else{
            quizBox.innerHTML = "Quiz Over........!!!";
            op1.style.display = "none";
            op2.style.display = "none";
            op3.style.display = "none";
            op4.style.display = "none";
            btn.style.display = "none";
        }
    },
    next:function(){
        this.index++;
        this.load();
    },
    check:function (ele) {
        var id = ele.id.split('');
        if (id[id.length - 1] == this.questions[this.index].answer) {
            this.score++;    
            ele.className = "correct";
            ele.innerHTML = "Correct";
            this.scoreCard();
        }
        else{
            ele.className = "wrong";
            ele.innerHTML = "Wrong";
        }
    },
    notClickAble:function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },
    clickAble:function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = "";
        }
    },
    score: 0,
    scoreCard:function( ) {
        scoreCard.innerHTML = this.score + " / " +this.questions.length;
    }
}
window.onload = app.load();
function button(ele) {
    app.check(ele);
    app.notClickAble();
}
function next() {
    app.next();
    app.clickAble();
}