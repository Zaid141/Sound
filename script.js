const firstAudio = document.getElementById("audio1");
const secondAudio = document.getElementById("audio2");
const thirdAudio = document.getElementById("audio3");
const fourthAudio = document.getElementById("audio4");

let startButton = document.getElementById("play");
let background = document.getElementById("background");

startButton.addEventListener("click", ()=>{
    firstAudio.play();
})

firstAudio.addEventListener("ended", ()=>{
    background.src = "airport.png"
    secondAudio.play();
})

secondAudio.addEventListener("ended", ()=>{
    background.src = "safari.png"
    thirdAudio.play();
})
thirdAudio.addEventListener("ended", ()=>{
    background.src = "radioStation.png"
    fourthAudio.play();
})

