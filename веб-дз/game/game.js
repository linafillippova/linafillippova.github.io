let score = { correct: 0, total:0, incorrect:0, checklevel:1, totallevel:0, };
let countdownInterval;

function startCountdown(durarion){
    let timeleft= durarion;

    countdownElement = document.getElementById('countdown');
    
    countdownInterval = setInterval(() => {
    const min=Math.floor(timeleft/60);
    const sec=timeleft%60;
    countdownElement.innerText = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    
    if (timeleft<= 0)
    {
        clearInterval(countdownInterval);
        countdownElement.innerText = ' Time out.';
        Calculate.innerText = `Game Over`;
        document.getElementById('checkresult').disabled = true; 
        endGame("Game Over");
    }
    timeleft --;
    },1000);
}

startCountdown(5*60);


const Level=document.getElementById('level');

const MathLevel = (QuanlityQuestion) =>{
    if (QuanlityQuestion >= 0 && QuanlityQuestion < 9) {
        Level.innerText = `Beginner`;
    } else if (QuanlityQuestion >= 9 && QuanlityQuestion < 19) {
        Level.innerText = `Intermediate`;
    } else if (QuanlityQuestion >= 19) {
        Level.innerText = `Advanced`;
    }

}

const Calculate=document.getElementById('math');

function getRandomInt(max,min) {
    return Math.floor(Math.random() * (max - min + 1) )+ min;
}

function getRandomOperation() {
    const operations = ['+', '-', '*']; 
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

function getRadomOperationLogic() {
    return operation = Math.random() < 0.5 ? 'AND' : 'OR';
}

const BeginnerMath = (a,b,operation) =>{
    switch (operation){
        case '+':
            Calculate.innerText=`${a}+${b}`;
            return a+b;
        case '-':
            Calculate.innerText=`${a}-${b}`;
            return a-b;
        case '*':
            Calculate.innerText=`${a}*${b}`;
            return a*b;
    }
}

function IntermediateMath() {
    let a = getRandomInt(100,1);
    let b = getRandomInt(100,1);
    
    const comparisons = [
        { operator: '<', question: `${a} < ${b}`, answer: a < b },
        { operator: '>', question: `${a} > ${b}`, answer: a > b },
        { operator: '<=', question: `${a} <= ${b}`, answer: a <= b },
        { operator: '>=', question: `${a} >= ${b}`, answer: a >= b }
    ];
    
    const randomIndex = Math.floor(Math.random() * comparisons.length);
    Calculate.innerText= comparisons[randomIndex].question;
    return comparisons[randomIndex].answer; 
}

function AdvancedMath() {
    let a = getRandomInt(1000,1);
    let b = getRandomInt(1000,1);
    let c = getRandomInt(1000,1);
    let d = getRandomInt(1000,1);

    const comparison1 = [
        { operator: '<', question: `${a} < ${b}`, answer: a < b },
        { operator: '>', question: `${a} > ${b}`, answer: a > b },
        { operator: '<=', question: `${a} <= ${b}`, answer: a <= b },
        { operator: '>=', question: `${a} >= ${b}`, answer: a >= b }
    ];
    
    const comparison2 = [
        { operator: '<', question: `${c} < ${d}`, answer: c < d },
        { operator: '>', question: `${c} > ${d}`, answer: c > d },
        { operator: '<=', question: `${c} <= ${d}`, answer: c <= d },
        { operator: '>=', question: `${c} >= ${d}`, answer: c >= d }
    ];

    let operationlogic = getRadomOperationLogic();

    const randomIndex1 = Math.floor(Math.random() * comparison1.length);
    const randomIndex2 = Math.floor(Math.random() * comparison2.length);
    let result;
    if(operationlogic==='AND')
    {
        Calculate.innerText= comparison1[randomIndex1].question + ' AND ' + comparison2[randomIndex2].question;
        result = comparison1[randomIndex1].answer&&comparison2[randomIndex2].answer;
    }
    else if(operationlogic==='OR')
    {
        Calculate.innerText= comparison1[randomIndex1].question + ' OR ' + comparison2[randomIndex2].question;
        result = comparison1[randomIndex1].answer||comparison2[randomIndex2].answer;
    }
    return result;
}

const checkmath = (answer,userInput,scoreObj) => {
    if (answer===userInput)
    {
        document.getElementById('result').innerText=`Correct.`; scoreObj.correct++;scoreObj.total++; scoreObj.checklevel++;scoreObj.totallevel++;
    }
    else
    {
        document.getElementById('result').innerText=`Incorrect.`;scoreObj.incorrect++;scoreObj.total++;scoreObj.totallevel++;
    }

    setTimeout(() => {
        document.getElementById('result').innerText = ''; 
    }, 2000); 
}

const getmath = () => {
    let a = getRandomInt(10,1);
    let b = getRandomInt(10,1);
    let c = getRandomOperation();
    let d = BeginnerMath(a, b, c);
    return d;
}


let result=getmath();
MathLevel(score.total);
let answers ;
document.getElementById('quanlitycorrect').innerHTML=`Correct: ${score.correct}  Incorrect: ${score.correct}`;
document.getElementById('quanlitytotal').innerHTML=`Total: ${score.totallevel}/10`;

document.getElementById('checkresult').addEventListener('click', function () {
    
    let inputValue = document.getElementById('input_result').value;
    
    if(score.total<10)
        {
            answers = parseFloat(inputValue);
        }
    else if(score.total>=10)
        {
            if(inputValue==='true')
            {
                answers = true;
            }
            else
            {
                answers = false;
            }
        }
    console.log(`result: ${result}, answers:${answers}, total: ${score.total}`)
    checkmath(result, answers,score); 
    MathLevel(score.total);
    document.getElementById('quanlitycorrect').innerHTML=`Correct: ${score.correct}  Incorrect: ${score.incorrect}`;
    document.getElementById('quanlitytotal').innerHTML=`Total: ${score.totallevel}/10`;
    document.getElementById('input_result').value= ``;
    if(score.total<=10)
    {
        if(score.total<10){
            result=getmath();
        }
        else{
            result=IntermediateMath();
        }

        if (score.total === 10)
        {
            if (score.checklevel <8)
            {
                clearInterval(countdownInterval);
                Calculate.innerText = `Game Over`;
                document.getElementById('checkresult').disabled = true;  
                endGame("Game Over");
            }
            else{ 
                score.checklevel = 1; score.correct=0; score.incorrect=0; score.totallevel=0;
                document.getElementById('quanlitycorrect').innerHTML=`Correct: ${score.correct}  Incorrect: ${score.incorrect}`;
                document.getElementById('quanlitytotal').innerHTML=`Total: ${score.totallevel}/10`;
            }
        }

    }
    else if(score.total>10 && score.total<=20)
    {

        if(score.total<20){
            result=IntermediateMath();
        }
        else{
            result=AdvancedMath();
        }

        if (score.total === 20)
            {
                if (score.checklevel <8)
                {
                    clearInterval(countdownInterval);
                    Calculate.innerText = `Game Over`;
                    document.getElementById('checkresult').disabled = true; 
                    endGame("Game Over");
                }
                else{ 
                    score.checklevel = 1; score.correct=0; score.incorrect=0; score.totallevel=0;
                    document.getElementById('quanlitycorrect').innerHTML=`Correct: ${score.correct}  Incorrect: ${score.incorrect}`;
                    document.getElementById('quanlitytotal').innerHTML=`Total: ${score.totallevel}/10`;
                }
            }
    }
    else if (score.total>=20 && score.total<30){
        result=AdvancedMath();
    }
    else{
        if (score.checklevel <8)
            {
                clearInterval(countdownInterval);
                Calculate.innerText = `Game Over`;
                document.getElementById('checkresult').disabled = true; 
                endGame("Game Over");
            }
        else
        {
            clearInterval(countdownInterval);
            Calculate.innerText = `You won! `;
            document.getElementById('checkresult').disabled = true; 
        }

    }
});

function endGame(message) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('checkresult').disabled = true; 

    document.getElementById('play-again').onclick = function() {
        resetGame();
    };

    document.getElementById('exit').onclick = function() {
        window.close(); 
    };
}

function resetGame() {
    score = { correct: 0, total: 0, incorrect: 0, checklevel: 0 };
    document.getElementById('quanlitycorrect').innerHTML = `Correct: 0  Incorrect: 0`;
    document.getElementById('quanlitytotal').innerHTML = `Total: 0/10`;
    countdownElement.innerText = '';
    document.getElementById('input_result').value = '';
    document.getElementById('checkresult').disabled = false;
    document.getElementById('modal').style.display = 'none';
    startCountdown(5 * 60); 
    result = getmath(); 
}