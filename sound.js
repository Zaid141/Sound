const firstAudio = document.getElementById("audio1");
const secondAudio = document.getElementById("audio2");
const thirdAudio = document.getElementById("audio3");
const fourthAudio = document.getElementById("audio4");
const fifthAudio = document.getElementById("audio5");
const sixthAudio = document.getElementById("audio6");

let startButton = document.getElementById("play");
var background = document.getElementById("background");

startButton.addEventListener("click", ()=>{
    firstAudio.play();
    currAudio = firstAudio
    background.style.webkitFilter = "blur(0px)";
    console.log(background.style.webkitFilter);
    startButton.style.display = "none";
    console.log("HI");
})

background.addEventListener("click", ()=>{
    if(!currAudio.paused){
        currAudio.pause();
        startButton.style.display = "block";
        background.style.webkitFilter = "blur(8px)";
    }
})

firstAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(airport.png)"
    currAudio = secondAudio
    currAudio.play();
    console.log("Sec");
})

secondAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(safari.png)"
    currAudio = thirdAudio
    currAudio.play();
    console.log("third");
})

thirdAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(AD1.png)"
    currAudio = fourthAudio
    currAudio.play();
    console.log("4");
})

fourthAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(safari.png)"
    currAudio = fifthAudio
    currAudio.play();
    console.log("5");
})

fifthAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(studio.png)"
    currAudio = sixthAudio
    currAudio.play();
    console.log("6");
})

const button = document.querySelector(".play-btn");

button.addEventListener("click",()=>{
    button.style.display = "none";
});

