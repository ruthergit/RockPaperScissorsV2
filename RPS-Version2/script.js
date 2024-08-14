let score = 0;

const scoreBoard = document.querySelector(".score-board");
const pickYourChoice = document.querySelector(".pick-your-choice");
const buttonChoices = document.querySelector(".button-choices");
setTimeout(() => { // First the main wrapper will activate the display flex after
    const introduction = document.querySelector(".intro");
    introduction.style.display = 'flex';
    
    setTimeout(() => {
        introduction.style.animation = 'fade-out 200ms forwards';  
        // next the fade out opacity will activate (but the element still there)
        setTimeout(() => {
            introduction.style.display = 'none'; // so we will use this another function to disappear
            scoreBoard.style.display = 'flex'; //scoreboard
            playBtn();
            
        }, 160); // in 100 milisec

    }, 1000); // how long the visibilty

}, 1090); // 1 Second
// FOCUS HERE

let RandomNum;

const rockClick = document.querySelector(".btn1");
const getResult = document.querySelector(".main-div-for-result");
const ShowRock = document.querySelector(".your-move-image1");
rockClick.addEventListener("click", e =>{
    pickYourChoice.style.opacity = '0';
    buttonChoices.style.opacity = '0';
    pickYourChoice.style.transition = 'opacity 40ms ease-in';
    buttonChoices.style.transition = 'opacity 40ms ease-in';
    
    ShowRock.style.display = 'block';
    setTimeout(() => {
        pickYourChoice.style.display = 'none';
        buttonChoices.style.display = 'none';
        getResult.style.display = 'flex';
        RandomNum = Math.floor(Math.random() * 3) + 1;

        if(RandomNum === 1){
            Scissor.style.display = 'block';
            document.querySelector(".result").innerText = 'you win';
            score++;

        }else if(RandomNum === 2){
            Paper.style.display = 'block';
            document.querySelector(".result").innerText = 'you lose';

        }else{
            Rock.style.display = 'block';
            document.querySelector(".result").innerText = 'tie';
        }
        let showScore = document.querySelector(".show-score");
        showScore.innerText = `${score}`;
        
    }, 45);
    
});


    


//  do this later
const paperClick = document.querySelector(".btn2");
const getResult2 = document.querySelector(".main-div-for-result");
const ShowPaper = document.querySelector(".your-move-image2");
paperClick.addEventListener("click", e =>{
    pickYourChoice.style.opacity = '0';
    buttonChoices.style.opacity = '0';
    pickYourChoice.style.transition = 'opacity 40ms ease-in';
    buttonChoices.style.transition = 'opacity 40ms ease-in';
    
    ShowPaper.style.display = 'block';
    setTimeout(() => {
        pickYourChoice.style.display = 'none';
        buttonChoices.style.display = 'none';
        getResult2.style.display = 'flex';

        
        RandomNum = Math.floor(Math.random() * 3) + 1;

        if(RandomNum === 1){
            Scissor.style.display = 'block';
            document.querySelector(".result").innerText = 'you lose';
        }else if(RandomNum === 2){
            Paper.style.display = 'block';
            document.querySelector(".result").innerText = 'tie';

        }else{
            Rock.style.display = 'block';
            document.querySelector(".result").innerText = 'you win';
            score++;
        }
        let showScore = document.querySelector(".show-score");
        showScore.innerText = `${score}`;
        
    }, 45);
    
});

const scissorClick = document.querySelector(".btn3");
const ShowScissor = document.querySelector(".your-move-image3");
scissorClick.addEventListener("click", e =>{

    pickYourChoice.style.opacity = '0';
    buttonChoices.style.opacity = '0';
    pickYourChoice.style.transition = 'opacity 40ms ease-in';
    buttonChoices.style.transition = 'opacity 40ms ease-in';
    
    ShowScissor.style.display = 'block';
    setTimeout(() => {
        pickYourChoice.style.display = 'none';
        buttonChoices.style.display = 'none';
        getResult2.style.display = 'flex';

        
        RandomNum = Math.floor(Math.random() * 3) + 1;

        if(RandomNum === 1){
            Scissor.style.display = 'block';
            document.querySelector(".result").innerText = 'tie';
        }else if(RandomNum === 2){
            Paper.style.display = 'block';
            document.querySelector(".result").innerText = 'you win';
            score++;
        }else{
            Rock.style.display = 'block';
            document.querySelector(".result").innerText = 'you lose';
            
        }
        let showScore = document.querySelector(".show-score");
        showScore.innerText = `${score}`;
        
    }, 45);
    
});



const Scissor = document.querySelector(".cpu-move-image1");
const Paper = document.querySelector(".cpu-move-image2");
const Rock =  document.querySelector(".cpu-move-image3");
Rock.style.display = 'none';
Paper.style.display = 'none';
Scissor.style.display = 'none';

const playAgainBtn = document.querySelector(".play-again-btn");

const playBtn = () =>{
    pickYourChoice.style.display = 'flex'; //pick your choice
    buttonChoices.style.display = 'flex'; //bato papel gunting
    pickYourChoice.style.opacity = '1';
    buttonChoices.style.opacity = '1';
}

playAgainBtn.addEventListener("click", e => {
    getResult.style.display = 'none';
    ShowRock.style.display = 'none';
    ShowPaper.style.display = 'none';
    ShowScissor.style.display = 'none';
    setTimeout(() => {
        playBtn();
        if(RandomNum === 1){
            Scissor.style.display = 'none';
            

        }else if(RandomNum === 2){
            Paper.style.display = 'none';
            

        }else{
            Rock.style.display = 'none';
            
        }
    }, 100);
});
