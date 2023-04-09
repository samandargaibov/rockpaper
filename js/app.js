// let btn = document.querySelector('.btn');

// btn.onclick = function () {
//     let inp = document.querySelector('#inp').value;
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let button = document.createElement('button');

//     h2.innerHTML = inp;
//     button.innerHTML = 'Delete';
//     button.className = 'btn1 btn btn-danger'

    

//     div.className = 'box d-flex justify-content-between'

//     div.appendChild(h2);
//     div.appendChild(button);
//     document.querySelector('.tasks').appendChild(div);
    
//     CheckTask()

    
// }

// document.querySelector('.btn1').onclick = function () {
//     div.className = 'd-none';
//    }

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

let choices = ['rock','paper','scissors'];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = '/img/' +  choices[i] + '.png';
        choice.addEventListener('click',selectChoise);
        document.getElementById('show').append(choice);
        
    }
}
function selectChoise(){
    you = this.id;
    document.getElementById('your-choice').src = '/img/' + you + '.png';

    computer = choices[Math.floor(Math.random()*3)];
    document.getElementById('opponent-choice').src = '/img/' + computer + '1' + '.png';

    if(you == computer){
        yourScore += 0;
        computerScore += 0;
    }
    else {
        if(you == 'rock'){
            if(computer == 'scissors'){
                yourScore +=1;
            }
            else if(computer == 'paper'){
                computerScore +=1;
            }
        }
        else if(you == 'scissors'){
            if(computer == 'paper'){
                yourScore +=1;
            }
            else if(computer == 'rock'){
                computerScore +=1;
            }
        }
       else  if(you == 'paper'){
            if(computer == 'rock'){
                yourScore +=1;
            }
            else if(computer == 'scissors'){
                computerScore +=1;
            }
        }
    }
    document.getElementById('score1').innerHTML = yourScore;
    document.getElementById('score2').innerHTML = computerScore;
}