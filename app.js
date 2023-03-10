

console.log(Math.random()*3)
let playerScore = 0
let aiScore = 0
let player = 'players'

function toggle(){
    document.getElementsByClassName('player')[0].innerHTML = 'Player : Rock'
    let arr  = ['Rock','Papper','Sicssor']
    document.getElementsByClassName('ai')[0].innerHTML = `Ai : ${arr[Math.round(Math.random()*2)]}`
    score()
    setTimeout(clear,1500)

}
function papperToggle(){
    document.getElementsByClassName('player')[0].innerHTML = 'Player : Papper'
    let arr  = ['Rock','Papper','Sicssor']
    document.getElementsByClassName('ai')[0].innerHTML = `Ai : ${arr[Math.round(Math.random()*2)]}`
    score()
    setTimeout(clear,1500)

}
function scissorToggle(){
    document.getElementsByClassName('player')[0].innerHTML = 'Player : Scissor'
    let arr  = ['Rock','Papper','Sicssor']
    document.getElementsByClassName('ai')[0].innerHTML = `Ai : ${arr[Math.round(Math.random()*2)]}`
    score()
    setTimeout(clear,1500)

}
 
document.getElementsByClassName('rock')[0].addEventListener('click',toggle)
document.getElementsByClassName('papper')[0].addEventListener('click',papperToggle)
document.getElementsByClassName('scissor')[0].addEventListener('click',scissorToggle)




function score(){
    let player = document.getElementsByClassName('player')[0].innerHTML 
    let ai = document.getElementsByClassName('ai')[0].innerHTML 
    console.log(player[9],ai[5])
    if(player[9] === 'R' && ai[5] === 'S'){
    //    document.getElementsByClassName('score')[0].innerHTML = 'Player win'
    console.log('winPlayer')
    playerScore += 1
    document.getElementsByClassName('player-score')[0].innerHTML = `Player Score =${playerScore}`
    }
    else if(player[9] === 'S' && ai[5] === 'P'){
        playerScore += 1
        document.getElementsByClassName('player-score')[0].innerHTML = `Player Score = ${playerScore}`
    }
    else if(player[9] === 'P' && ai[5] === 'R'){
        playerScore += 1
        document.getElementsByClassName('player-score')[0].innerHTML = `Player Score = ${playerScore}`
    }
    else if(player[9] === 'P' && ai[5] === 'P'){
        console.log('tie')
    }
    else if(player[9] === 'R' && ai[5] === 'R'){
        console.log('tie')
    }
    else if(player[9] === 'S' && ai[5] === 'S'){
        console.log('tie')
    }
    else{
        aiScore += 1
        document.getElementsByClassName('ai-score')[0].innerHTML = `Ai Score = ${aiScore}`
    }

}
function clear(){
    // document.getElementsByClassName('player')[0].innerHTML = 'Player :'
    // document.getElementsByClassName('ai')[0].innerHTML = 'Ai :'
}

