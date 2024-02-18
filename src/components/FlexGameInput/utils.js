export const parseCSS = (cssString) => {
  const styles = {};
  cssString.split(";").forEach((rule) => {
    const [property, value] = rule.split(":");
    if (property && value) {
      const camelCaseProperty = property
        .trim()
        .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
      styles[camelCaseProperty] = value.trim();
    }
  });
  return styles;
};

export const ToastSuccess = {
  duration: 1000,
  className: "bg-green-400",
};
