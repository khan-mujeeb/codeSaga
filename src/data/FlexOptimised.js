import flexModelData from "../assets/flexLearningData.png";
import alignSelf from "../assets/img/align-self.png";
import justifyContent from "../assets/img/justifycontent.png";

import greenBoy from "../assets/img/greenBoy.svg";
import greenboyHouse from "../assets/img/greenBoyHouse.svg";
import blueBoyHouse from "../assets/img/blueBoyHouse.svg";
import boyPlayGround from "../assets/img/boyPlayGround.svg";
import blueBoy from "../assets/img/blueBoy.svg";
import redBoy from "../assets/img/RedBoy.svg";
import redBoyHouse from "../assets/img/redBoyHouse.svg";
import flexGrow from "../assets/img/flex-grow.png";
export const dataFlexbox = [
  {
    id: "1",
    level: "1",
    introductions:
      "Welcome to Flexbox Playground! Let's start with the basics by helping a boy reach his home.",
    descriptions:
      "To align items vertically within a flex container, we use the `align-items` property. This property controls the alignment of items along the cross axis (vertical axis by default).",
    challenge:
      "Use `align-items` to move the boy to the bottom of the playground so he can reach his home.",
    assets: [boyPlayGround, greenboyHouse, greenBoy],
    correctAnswer: "align-items: flex-end;",
    learning:
      "`align-items` in flexbox controls how items are aligned vertically (up and down) inside a flex container. </br></br> **It works like this:** - </br> If `align-items` is set to `flex-start`, items align to the start of the container.</br> - If set to `flex-end`, items align to the end of the container.</br> - If set to `center`, items align at the center of the container. </br>- If set to `stretch`, items stretch to fill the container vertically.</br>- If set to `baseline`, items align along their baselines. </br></br>Now, the `flex-direction` property in flexbox determines the direction of the main axis, which affects how `align-items` works: - If `flex-direction` is set to `row` (the default), `align-items` controls vertical alignment. - If `flex-direction` is set to `column`, `align-items` controls horizontal alignment. So, `align-items` in flexbox is used to vertically align items inside a flex container, and its effect can change based on the direction of the main axis set by `flex-direction`.",
    modelImage: flexModelData,
  },
  {
    id: "2",
    level: "2",
    introductions:
      "Great job! Now let's help multiple kids reach their respective homes.",
    descriptions:
      "The `align-self` property allows you to override the `align-items` property for individual flex items. This way, you can align each child differently within the same flex container.",
    challenge:
      "Use `align-self` to move the green boy and blue boy to their respective homes.",
    assets: [boyPlayGround, greenboyHouse, greenBoy, blueBoyHouse, blueBoy],
    correctAnswer:
      "greenBoy { align-self: flex-end; } blueBoy { align-self: flex-start; }",
    learning:
      "`align-items` in flexbox controls how items are aligned vertically (up and down) inside a flex container.  </br></br>Now, the `flex-direction` property in flexbox determines the direction of the main axis, which affects how `align-items` works: - If `flex-direction` is set to `row` (the default), `align-items` controls vertical alignment. - If `flex-direction` is set to `column`, `align-items` controls horizontal alignment. So, `align-items` in flexbox is used to vertically align items inside a flex container, and its effect can change based on the direction of the main axis set by `flex-direction`. </br></br>**Align-self** in flexbox allows individual flex items to override the alignment set by `align-items` for their respective container. </br></br> ",
    modelImage: alignSelf,
  },
  {
    id: "3",
    level: "3",
    introductions: "Now let's arrange items horizontally in the playground.",
    descriptions:
      "The `justify-content` property aligns items along the main axis (horizontal axis by default). You can use this property to distribute space between items.",
    challenge:
      "Use `justify-content` to evenly distribute the kids in the playground to their respective color house.",
    assets: [
      boyPlayGround,
      greenBoy,
      blueBoy,
      redBoy,
      greenboyHouse,
      blueBoyHouse,
      redBoyHouse,
    ],
    learning:
      "`justify-content` in flexbox controls how items are aligned along the main axis (horizontally in `flex-direction: row` and vertically in `flex-direction: column`). </br></br> **It works like this:** - </br> If `justify-content` is set to `flex-start`, items align to the start of the container.</br> - If set to `flex-end`, items align to the end of the container.</br> - If set to `center`, items align at the center of the container. </br> - If set to `space-between`, items are evenly distributed with the first item at the start and the last item at the end.</br> - If set to `space-around`, items are evenly distributed with equal space around them.</br> - If set to `space-evenly`, items are distributed so that the spacing between items is equal. </br></br>So, `justify-content` in flexbox is used to horizontally align and distribute items inside a flex container, adjusting the spacing between them based on the chosen value.",
    correctAnswer: "justify-content: space-between;",
    modelImage: justifyContent,
  },
  {
    id: "4",
    level: "4",
    introductions: "Let's make the items grow to fill the available space.",
    descriptions:
      "The `flex-grow` property allows flex items to grow and fill the available space in the flex container. The value represents the proportion of the remaining space the item should take.",
    challenge:
      "Use `flex-grow` to fill the available space in the glass with blue chemical.",
    assets: ["boyPlayGround", "greenBoy", "blueBoy", "redBoy"],
    correctAnswer: "greenBoy, blueBoy, redBoy { flex-grow: 1; }",
    learning:
      "`flex-grow` in flexbox determines how much a flex item should grow relative to the rest of the flex items inside the same container when there is extra space available. </br></br> **It works like this:** - </br> A `flex-grow` value of `0` means the item will not grow and will maintain its width. </br> - A `flex-grow` value of `1` means the item will grow to take up an equal share of the available space. </br> - Higher values make the item grow more relative to items with lower values. For example, a value of `2` makes the item grow twice as much as items with a value of `1`.</br></br>So, `flex-grow` is used to proportionally distribute extra space in a flex container among its items based on their growth values.",
    modelImage: flexGrow,
  },
  {
    id: "5",
    level: "5",
    introductions:
      "Now let's create a layout where the sidebar stays fixed and the content area fills the remaining space.",
    descriptions:
      "The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. You can use it to set a fixed size for the sidebar and let the content area grow to fill the remaining space.",
    challenge:
      "Use `flex` to create a layout with a fixed-width sidebar and a flexible content area.",
    assets: ["container", "sidebar", "content"],
    correctAnswer: "sidebar { flex: 0 0 200px; } content { flex: 1; }",
  },
  {
    id: "6",
    level: "6",
    introductions:
      "Let's create a more complex layout with a header, footer, and sidebar.",
    descriptions:
      "Combining multiple flex properties can help create complex layouts. Use `flex-direction` to control the layout direction and `flex` to set sizes for different sections.",
    challenge:
      "Use flex properties to create a layout with a fixed header, footer, and sidebar, and a flexible content area.",
    assets: ["container", "header", "sidebar", "content", "footer"],
    correctAnswer:
      "container { display: flex; flex-direction: column; } header, footer { flex: 0 0 50px; } sidebar { flex: 0 0 200px; } content { flex: 1; }",
  },
];
