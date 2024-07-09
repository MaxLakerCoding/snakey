let anim = false
function playanim(){
    if(anim == false){
        anim = true
        document.querySelector('.menubutton-img').classList.toggle('menubutton-img-anim')
        setTimeout(() => {
            document.querySelector('.menubutton-img').classList.toggle('menubutton-img-anim')
            anim = false
        }, 250);
    }
}

let snake = false
function snakeEasterEgg(){
    if(snake == false){
        snake = true
        document.querySelector('.snake-easter-egg').classList.toggle('snake-easter-egg-active')
        setTimeout(() => {
            document.querySelector('.snake-easter-egg').classList.toggle('snake-easter-egg-active')
            snake = false
        }, 1500);
    }
}

let git = false
function githubAnim(){
    if(git == false){
        git = true
        document.querySelector('.credit-img').classList.toggle('credit-anim')
        setTimeout(() => {
            document.querySelector('.credit-img').classList.toggle('credit-anim2')
            setTimeout(() => {
                document.querySelector('.credit-img').classList.toggle('credit-anim')
                document.querySelector('.credit-img').classList.toggle('credit-anim2')
                git = false
            }, 250)
        }, 250);
    }
}

function settingsAnim(){
    document.querySelector('.settings').classList.toggle('settings-active')
}

function gameAnim(){
    document.querySelector('.game').classList.toggle('game-active')
}

function exitGame(){
    gameAnim()
    setTimeout(()=>{
        location.reload()
    }, 501)
}
