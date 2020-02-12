
const fonts = {
    primary: "Nova Square, cursive",
    secondary: "Roboto, sans-serif"
};

const colors = {
    black: "rgb(3, 3, 3)",
    darkGrey: "#363538",
    lightGrey: "#8D8C8A",
    light: "#ccc",
    accent: "#408697",
    lightAccent: "#52D6F4"
};

const shadows = {
    div1: `0 4px 8px 0 ${colors.darkGrey}, 0 6px 20px 0 ${colors.lightGrey}`,
    div2: `0 6px 15px 0 ${colors.accent}, 0 8px 25px 0 ${colors.lightGrey}`,
    div3: `1px 2px 5px 0 ${colors.accent}, 1px 4px 8px 0 ${colors.black}`,
    text1: `1px 1px 1px ${colors.darkGrey}`,
    text2: `2px 2px 3px ${colors.accent}`
}

module.exports = { fonts, colors, shadows };