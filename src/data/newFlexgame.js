import level3a from "../assets/img/bg1.jpg";
import level3b from "../assets/img/bg1.jpg";
import level3c from "../assets/img/bg1.jpg";
import greenBoy from "../assets/img/greenBoy.svg";
import greenboyHouse from "../assets/img/boyHouse.svg";
import boyPlayGround from "../assets/img/boyPlayGround.svg";
import blueBoy from "../assets/img/blueBoy.svg";
// import blueBoyHouse from "../assets/img/BlueBoyHouse.svg";

export const levelData = [
  {
    Level: 1,
    questions: [
      "Use Flex properties to help this 🚶‍♂️ kid to reach his home 🏠  ",
    ],
    answers: [
      "[justify-content] will move the kid horizontally within the container.",
      "[align-items] will move the kid vertically within the container.",
    ],
    assets: [boyPlayGround, greenboyHouse, greenBoy],
  },
  {
    Level: 2,
    questions: [
      "Use Flex properties to help this 🚶‍♂️ kids to reach their respective homes ",
    ],
    answers: [
      "[align-self] will move individual the kid vertically within the container.",
    ],
    assets: [boyPlayGround, greenboyHouse, greenBoy, greenBoy, blueBoy],
  },
  {
    Level: 3,
    questions: [
      "you have entered the 🏰 castle of the 🧙‍♂️ wizard, use flex properties to reach the 🚪 door",
    ],
    answers: [],
    assets: [level3a, level3b, level3c],
  },
];

console.log(levelData);
