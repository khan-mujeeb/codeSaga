export const parseCSS = (cssString) => {
  console.log("cssString:", cssString); // Log the value of cssString
  const styles = {};
  if (typeof cssString === "string") {
    // Check if cssString is a string
    cssString.split(";").forEach((rule) => {
      const [property, value] = rule.split(":");
      if (property && value) {
        const camelCaseProperty = property
          .trim()
          .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        styles[camelCaseProperty] = value.trim();
      }
    });
  } else {
    console.error("Invalid cssString:", cssString); // Log an error if cssString is not a string
  }
  return styles;
};

export const ToastSuccess = {
  duration: 1000,
  className: "bg-green-400",
};
