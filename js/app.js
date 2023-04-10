// let btn = document.querySelector('.btn');


// btn.onclick = function () {
//     let inp = document.querySelector('#inp').value;
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let button = document.createElement('button');
//     let h3 = document.querySelector('#btnn');

//     h2.innerHTML = inp;
//     button.innerHTML = 'Delete';
//     button.className = 'btn1 btn btn-danger'

//     let btn1 = document.querySelector('.btn1');
    
//     div.className = 'box d-flex justify-content-between'

//     div.appendChild(h2);
//     div.appendChild(button);
//     document.querySelector('.tasks').appendChild(div);

//     document.getElementsByClassName('btn1').onclick = function () {
//         div.className = 'd-none';
//        }
    
//     CheckTask()

//     btn1.onclick = function(){
//         div.className = 'd-none'
//     }
    
// }


// function CheckTask(){
//     let count = document.querySelectorAll('.box').length;
//     let alert = document.querySelector('.alert');

//     if(count > 0){
//         alert.style.display= 'none';
//     }
//     else{
//         alert.style.display= 'block';
//     }

// }

let you;
let yourScore = 0;
let computer;
let computerScore = 0;
let result = document.querySelector('.result1');
let result1 = document.querySelector('.result2');
let count = 0;

let choices = ['rock','paper','scissors'];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = '/img/' +  choices[i] + '.png';
        choice.addEventListener('click',selectChoise);
        let show = document.getElementById('show');
        show.append(choice);
        
    }
}
function selectChoise(){
    you = this.id;
    document.getElementById('your-choice').src = '/img/' + you + '.png';

    count++;

    computer = choices[Math.floor(Math.random()*3)];
    document.getElementById('opponent-choice').src = '/img/' + computer + '1' + '.png';

    if(you == computer){
        yourScore += 0;
        computerScore += 0;
        result.innerHTML = 'Tie!';
        result.style.color = 'orange';
    }
    else {
        if(you == 'rock'){
            if(computer == 'scissors'){
                yourScore +=1;
                result.innerHTML = 'Win!';
                result.style.color = 'green';
            }
            else if(computer == 'paper'){
                computerScore +=1;
                result.innerHTML = 'Loosed!';
                result.style.color = 'red';
            }
        }
        else if(you == 'scissors'){
            if(computer == 'paper'){
                yourScore +=1;
                result.innerHTML = 'Win!';
                result.style.color = 'green';
            }
            else if(computer == 'rock'){
                computerScore +=1;
                result.innerHTML = 'Loosed!';
                result.style.color = 'red';
            }
        }
       else  if(you == 'paper'){
            if(computer == 'rock'){
                yourScore +=1;
                result.innerHTML = 'Win!';
                result.style.color = 'green';
            }
            else if(computer == 'scissors'){
                computerScore +=1;
                result.innerHTML = 'Loosed!';
                result.style.color = 'red';
            }
        }
    }
    
    document.getElementById('score1').innerHTML = yourScore;
    document.getElementById('score2').innerHTML = computerScore;

    if(yourScore >= 5 || computerScore >=5){
        result.innerHTML = 'Game is over!!'
        result.style.color = 'red';
        show.className = 'd-none';
        if(yourScore === 5){
            result1.innerHTML = 'You won!!!'
            result1.style.color = 'green';
        }
        else if(computerScore ===5)
        {
            result1.innerHTML = 'You lost!!!'
            result1.style.color = 'red';
        }
        return;
    }
     
}

let reload = document.querySelector('#reload');
reload.onclick = function(){
    location.reload();
}

// let down = document.querySelector('#down');
// let lang = document.querySelector('.lang');

// down.onclick = function () {
    
//     if(lang.className.match('d-none')){
//         lang.className = 'lang d-block';
//         down.style.transform = 'rotate(180deg)';
//     }
//     else{
//         lang.className = 'lang d-none'
//         down.style.transform = 'rotate(0deg)';
//     }
// }

// let axtar = document.querySelector('.axtar');
// let inp1 = document.querySelector('#inp1');


// axtar.addEventListener('click',(e) =>{
//     if(inp1.className.match('d-none')){
//         inp1.className = 'form-control d-block';
//     }
//     else{
//         inp1.className ='form-control d-none';
//     }
// })