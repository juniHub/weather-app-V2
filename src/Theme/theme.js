
const dark = "#232946";
const light = "#fffffe";

const themeLight = {
  background: light,
  body: dark
};

const themeDark = {
  background: dark,
  body: light,
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;