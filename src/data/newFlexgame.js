import level3a from "../assets/img/bg1.jpg";
import level3b from "../assets/img/bg1.jpg";
import level3c from "../assets/img/bg1.jpg";
import greenBoy from "../assets/img/greenBoy.svg";
import greenboyHouse from "../assets/img/boyHouse.svg";
import boyPlayGround from "../assets/img/boyPlayGround.svg";
import blueBoy from "../assets/img/blueBoy.svg";
//import blueBoyHouse from "../assets/img/blueBoyHouse.svg";

export const levelData = [
  {
    Level: 1,
    questions: [
      "Use Flex properties to help this 🚶‍♂️ kid to reach his home 🏠  ",
    ],
    answers: [
      "`align-items` in flexbox controls how items are aligned vertically (up and down) inside a flex container. It works like this: - If `align-items` is set to `flex-start`, items align to the start of the container. - If set to `flex-end`, items align to the end of the container. - If set to `center`, items align at the center of the container. - If set to `stretch`, items stretch to fill the container vertically. - If set to `baseline`, items align along their baselines. Now, the `flex-direction` property in flexbox determines the direction of the main axis, which affects how `align-items` works: - If `flex-direction` is set to `row` (the default), `align-items` controls vertical alignment. - If `flex-direction` is set to `column`, `align-items` controls horizontal alignment. So, `align-items` in flexbox is used to vertically align items inside a flex container, and its effect can change based on the direction of the main axis set by `flex-direction`."
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
    assets: [boyPlayGround, greenboyHouse, greenBoy, greenboyHouse, blueBoy],
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
