//Code for game
//Global constants
const clueHoldTime=1000; //length of clue's light&sound
const cluePauseTime=333; //pause btw clues
const nextClueWaitTime=1000; //wait time before playback of clue sequence

//Global Variables
var pattern = [4,2,4,3,2,1,2,4];
var progress=0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //volume btw 0.0 and 1.0
var guessCounter=0;
var chances=3;

function startGame(){
  //initializing the game var
  progress=0;
  gamePlaying= true;
  chances=3;
  for(let i=0;i<pattern.length;i++)
    pattern[i]=getRandomPattern();
  
  //swap start and stop button display
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence()
}

function getRandomPattern(){
  return parseInt(Math.random()*4)+1;
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

//sound synthesis functions
const freqMap = {
  1: 500.6,
  2: 329.6,
  3: 500,
  4: 466.2
}

function playTone(btn, len){
  o.frequency.value=freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime+0.05,0.025)
  tonePlaying=true
  setTimeout(function(){
      stopTone()
  },len)
}

function startTone(btn) {
  if(!tonePlaying) {
    o.frequency.vlaue= freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime+0.05,0.025)
    tonePlaying=true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

//Page Initialization
//Initialize Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//lighting and clearing buttons
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

//playing one clue
function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//playing sequence
function playClueSequence() {
  guessCounter=0;
  let delay=nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<=progress; i++) { //for each clue revealed
    console.log("play single clue: " + pattern[i] +" in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) //set timeout to play clue
    delay+=clueHoldTime
    delay+=cluePauseTime;
  }
}

//lose game
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

//win game
function winGame() {
  stopGame();
  alert("Game Over. You won!")
}

//handle guess
function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  //game logic
  if(btn!=pattern[guessCounter]) {
    chances-=1;
    if(chances==0)
      loseGame();
    else
      alert("Guess wrong! Try again! Left with " + chances + " guess left!");
  }
  else {
    if(progress == guessCounter){
      if(progress==pattern.length-1)
        winGame();
      else{
        progress+=1;
        playClueSequence();
      }
    }
    else
      guessCounter+=1;
  }
}