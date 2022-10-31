const firstAudio = document.getElementById("audio1");
const secondAudio = document.getElementById("audio2");
const thirdAudio = document.getElementById("audio3");
const fourthAudio = document.getElementById("audio4");

let startButton = document.getElementById("play");
var background = document.getElementById("background");

startButton.addEventListener("click", ()=>{
    firstAudio.play();
    //background.style.filter = none;
    //startButton.style.display = none;
    console.log("HI");
})

firstAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(airport.png)"
    secondAudio.play();
    console.log("Sec");
})

secondAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(safari.png)"
    thirdAudio.play();
    console.log("third");
})

thirdAudio.addEventListener("ended", ()=>{
    background.style.backgroundImage = "url(studio.png)"
    //fourthAudio.play();
    console.log("4");
})


const button = document.querySelector(".play-btn");

button.addEventListener("click",()=>{
    button.style.display = "none";
});

