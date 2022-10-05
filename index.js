let imageViwe1 = document.getElementById("door1");
let imageViwe2 = document.getElementById("door2");
let imageViwe3 = document.getElementById("door3");
const beachImage =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceImage =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const botImage =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const closedDoorImage =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');

const generateRandomValueFrom0To2 = () => {
  return Math.floor(Math.random() * 3);
};
let RandomNUmber = generateRandomValueFrom0To2()
let stillPlaying = true;
let numberOfClosedDoors = 3

imageViwe1.onclick = () => {
  if (imageViwe1.src == closedDoorImage && stillPlaying) {
    numberOfClosedDoors--;
    if (RandomNUmber == 0) {
      imageViwe1.src = botImage;
      stillPlaying = false;
      react(numberOfClosedDoors);
    } else if (RandomNUmber == 1) {
      imageViwe1.src = beachImage;
    } else {
      imageViwe1.src = spaceImage;
    }
  }
}

imageViwe2.onclick = () => {
  if (imageViwe2.src == closedDoorImage && stillPlaying) {
    numberOfClosedDoors--;
    if (RandomNUmber == 1) {
      imageViwe2.src = botImage;
      stillPlaying = false;
      react(numberOfClosedDoors);
    } else if (RandomNUmber == 0) {
      imageViwe2.src = spaceImage;
    } else {
      imageViwe2.src = beachImage;
    }
  }
}
imageViwe3.onclick = () => {
  if (imageViwe3.src == closedDoorImage && stillPlaying) {
    numberOfClosedDoors--;
    if (RandomNUmber == 2) {
      imageViwe3.src = botImage;
      stillPlaying = false;
      react(numberOfClosedDoors);
    } else if (RandomNUmber == 1) {
      imageViwe3.src = spaceImage;
    } else {
      imageViwe3.src = beachImage;
    }
  }
}
startButton.onclick = ()=> {
  imageViwe1.src = closedDoorImage;
  imageViwe2.src = closedDoorImage;
  imageViwe3.src = closedDoorImage;
  stillPlaying = true;
  numberOfClosedDoors = 3;
  RandomNUmber = generateRandomValueFrom0To2()
  startButton.innerHTML = 'Good luck!';


}

function react(nums){
  if( nums == 0){
    startButton.innerHTML = 'you win';

  }
  else{
    startButton.innerHTML = 'you lose!, play again?';
  }
}

