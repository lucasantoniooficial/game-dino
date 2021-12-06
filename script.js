const dino = document.getElementsByClassName('dino')[0];
const background = document.getElementsByClassName('background')[0];
let isJumping = false;
let position = 0;

const jump = () => {
    isJumping = true;
    let upInterval = setInterval(() => {
        
        if(position >= 150) {
            clearInterval(upInterval);
            
        

            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                    return;
                }
                position -= 20;

                dino.style.bottom = position + 'px';
            },20);
            return;
        }

        position += 20;

        dino.style.bottom = position + 'px';
    }, 20)

}

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
            return;
        }

        if(cactusPosition > 10 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            clearTimeout(generateCactus);
            document.body.innerHTML = "<h1 class='game-over'> Fim de jogo</h1>";
        }

        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

    },20);

    let generateCactus = setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener("keyup",(event) => {
    if(event.keyCode === 32) {
       if(!isJumping) {
        jump();
        return;
       }
    }
});