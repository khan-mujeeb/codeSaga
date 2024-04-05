import cup from "../assets/bowl.svg";
import cone from "../assets/cone.svg";
import vanilla from "../assets/vanilla.png";
import chocolate from "../assets/chocolate.png";
import strawberry from "../assets/strawberry.png";
import plate from "../assets/plate.png";

export const dataSelectorCss = [
  {
    id: "1",
    level: "1",
    introductions:
      "Here at CSS Scoops, you'll learn all about CSS selectors by way of ice cream sundaes. Selectors - you guessed it - select things. They select the HTML elements that you can apply a set of CSS styles to.",
    descriptions:
      "Let's start simple. Suppose you want to apply styles to every <div> element. You can do this with the selector div. This is called a type selector.",
    challenge: "What selector will select all <cone> elements?",
    htmlContent: `
      <cup></cup>
      <cone></cone>
      <cone></cone>
      <cup></cup>
    `,
    assets: [cup, cone, cone, cup],
    selectAsset: [1, 2],
    correctAnswer: "cone",
  },
  {
    id: "2",
    level: "2",
    introductions:
      "Welcome back to CSS Scoops! In this level, we'll dive deeper into CSS selectors and learn about a new one called the child combinator.",
    descriptions:
      "Imagine you have a <cup> element containing several <cone> elements. You want to style only the <cone> elements inside the <cup>, leaving out any <cone> elements that aren't inside a <cup>. Here comes the '>' (child combinator) to the rescue! This combinator allows you to select only the direct children of a particular element.",
    challenge: "What selector will select all <cone> elements inside <cup>?",
    htmlContent: `
      <cone></cone>
      <cup> 
        <cone></cone>
        <cone></cone>
      </cup>
      <cone></cone>
      <cup></cup>
    `,
    assets: [cone, cup, cone, cone, cone, cup],
    selectAsset: [2, 3],
    correctAnswer: "cup>cone",
  },
  {
    id: "3",
    level: "3",
    introductions:
      "You're now a CSS selector master! Let's explore the :not() pseudo-class, which allows you to select elements that do not match a specific selector.",
    descriptions:
      "Suppose you have a list of <ice-cream> elements, but you want to style all flavors except for 'vanilla'. The :not() pseudo-class allows you to exclude elements that match a certain selector.",
    challenge:
      "What selector will select all <ice-cream> elements except for 'vanilla'?",
    htmlContent: `
      <ice-cream class="vanilla"></ice-cream>
      <ice-cream class="chocolate"></ice-cream>
      <ice-cream class="strawberry"></ice-cream>
    `,
    assets: [chocolate, vanilla, strawberry],
    selectAsset: [0, 2],
    correctAnswer: "ice-cream:not(.vanilla)",
  },
  {
    id: "4",
    level: "4",
    introductions:
      "Now that you're getting the hang of it, let's explore another useful CSS selector: the descendant combinator.",
    descriptions:
      "Suppose you have a <plate> element containing several <cup> elements, and each <cup> contains some <cone> elements. You want to style all <cone> elements inside the <plate>. The descendant combinator (space) allows you to select all descendants of a particular element, regardless of their level of nesting.",
    challenge: "What selector will select all <cone> elements inside <plate>?",
    htmlContent: `
      <plate>
        <cup>
          <cone></cone>
          <cone></cone>
        </cup>
        <cup>
          <cone></cone>
          <cone></cone>
        </cup>
      </plate>
      <cup>
        <cone></cone>
        <cone></cone>
      </cup>
    `,
    assets: [plate, cup, cup, cup, cone, cone, cone, cone, cone, cone],
    selectAsset: [4, 5, 6, 7],
    correctAnswer: "platecone",
  },
  // [plate, cup, cone, cone, cup, cone, cone, cup, cone, cone],
  {
    id: "5",
    level: "5",
    introductions:
      "Let's dive even deeper into CSS selectors with the adjacent sibling combinator.",
    descriptions:
      "Suppose you have a <cup> element followed by a <cone> element, and you want to style only the <cone> that comes immediately after the <cup>. The adjacent sibling combinator (+) allows you to select an element that is immediately preceded by a specific element.",
    challenge:
      "What selector will select the <cone> element immediately following the <cup> element?",
    htmlContent: `
      <cup></cup>
      <cone></cone>
      <cup></cup>
      <cone></cone>
    `,
    assets: [cup, cone, cup, cone],
    selectAsset: [0, 1, 2, 3],
    correctAnswer: "cup+cone",
  },
];
