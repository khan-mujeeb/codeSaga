const isValidStyle1 = (style1) => {
  console.log(style1.alignItems);
  return (
    style1 && typeof style1 === "object" && style1.alignItems === "end"
    // Add additional checks if needed
  );
};

const isValidStyleLevel2 = (style1, style2) => {
  console.log(style1, style2);
  return (
    style1 &&
    typeof style1 === "object" &&
    style1.alignSelf === "end" &&
    style2 &&
    typeof style2 === "object" &&
    style2.alignSelf === "center"
    // Add additional checks if needed
  );
};

export const AnswerChecker = (flexLevel, leveStyle) => {
  if (flexLevel === "flexLevel1" && isValidStyle1(leveStyle?.style1)) {
    return true;
  } else if (
    flexLevel === "flexLevel2" &&
    isValidStyleLevel2(leveStyle?.style1, leveStyle?.style2)
  ) {
    return true;
  } else {
    return false;
  }
};