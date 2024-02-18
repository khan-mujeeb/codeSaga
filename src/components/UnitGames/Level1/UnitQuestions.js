const UnitQuestions = [
    {
        level: 1,
        scenario:
            "Welcome to the Unit Universe! Your task is to master sizing elements using different CSS units.",
        question:
            "Adjust the dimensions (height and width) of the orange container to cover the entire desktop screen (`🖥️`). Experiment with percentage-based units (`%`) and make the orange container fill the entire desktop background.",
        hint: "Try using percentage-based units like `20%`, `50%`, etc., to cover the desktop.",
    },
    {
        level: 2,
        scenario:
            "Dive deeper into sizing units! Embrace the power of `em` units for flexible element sizing.",
        question:
            "Adjust the dimensions of the orange container using `em` units to cover half of the desktop screen (`🖥️`). Experiment with `em` values to achieve a proportional size compared to the viewport.",
        hint: "The `em` unit is relative to the font size of the parent element. Try values like `1em`, `2em`, etc., to cover half of the desktop.",
    },
    {
        level: 3,
        scenario:
            "Uncover the potential of `rem` units! Explore their consistency for sizing elements.",
        question:
            "Modify the orange container's dimensions using `rem` units to occupy one-third of the desktop's width. Experiment with different `rem` values for precise sizing.",
        hint: "Unlike `em`, `rem` units are relative to the root (`html`) font size. Use values like `1rem`, `2rem`, etc., to occupy one-third of the desktop.",
    },
    {
        level: 4,
        scenario:
            "Discover the versatility of viewport units (`vw` and `vh`)! Master their usage for responsive designs.",
        question:
            "Resize the orange container using `vw` units to cover 40% of the viewport's width. Explore `vh` units to make it occupy 30% of the viewport's height.",
        hint: "`vw` is relative to the viewport's width, while `vh` is relative to its height. Try values like `40vw` and `30vh` for the container.",
    },
    {
        level: 5,
        scenario:
            "Delve into precise sizing with `px` units! Learn their static nature for element dimensions.",
        question:
            "Adjust the orange container's dimensions using `px` units to occupy 300 pixels in width and 200 pixels in height. Experiment to ensure it fits within the desktop area.",
        hint: "`px` units are fixed and not relative to other factors. Use values like `300px` and `200px` for the container's width and height.",
    },
    {
        level: 6,
        scenario:
            "Explore the potential of `fr` units in CSS grids! Understand their role in responsive layouts.",
        question:
            "Construct a CSS grid layout with three columns using `fr` units. Allocate the first column 1 fraction unit, the second column 2 fraction units, and let the third column occupy the remaining space.",
        hint: "`fr` units distribute available space proportionally within a grid. Try `1fr`, `2fr`, and the remaining space for the columns.",
    },
];

// Export the array for use in other files if needed
export default UnitQuestions;
