const colors = require("@radix-ui/colors");

function generateColorsMap() {
  const _colors = {};

  for (const [name, map] of Object.entries(colors)) {
    if (name.endsWith("A")) {
      continue;
    }
    _colors[name] = map;
  }

  for (const [name, map] of Object.entries(_colors)) {
    let i = 0;
    const isDark = name.includes("Dark");
    const strippedName = name.replace("Dark", "");
    const _map = {};
    for (const color of Object.values(map)) {
      _map[i + 1] = `hsl(var(--rc-${strippedName}-${
        isDark ? "dark" : "light"
      }-${i + 1}), <alpha-value>)`;
      i++;
    }
    _colors[isDark ? name : `${name}Light`] = _map;
  }

  for (const [name, map] of Object.entries(colors)) {
    if (name.includes("Dark") || name.endsWith("A")) {
      continue;
    }
    const _map = {};

    let i = 0;
    for (const color of Object.values(map)) {
      _map[i + 1] = `hsl(var(--rc-${name}-auto-${i + 1}), <alpha-value>)`;
      i++;
    }
    _colors[`${name}`] = _map;
  }

  return _colors;
}

const generatedColors = generateColorsMap();
const colorsNames = Object.keys(generatedColors).filter(
  (c) => !c.endsWith("Light") && !c.endsWith("Dark")
);

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

function generateColorsSafeList() {
  const breakpoints = ["sm", "md", "lg", "xl", "2xl"];
  const variants = ["hover", "focus"];
  const utilities = ["bg", "text", "border", "ring"];
  const colors = colorsNames;
  const numbers = range(12);

  const output = [];
  for (const b of breakpoints) {
    for (const v of variants) {
      for (const u of utilities) {
        for (const c of colors) {
          for (const n of numbers) {
            output.push(`${b}:${v}:${u}-${c}-${n}`);
            output.push(`${v}:${u}-${c}-${n}`);
            output.push(`${b}:${u}-${c}-${n}`);
            output.push(`${u}-${c}-${n}`);
          }
        }
      }
    }
  }
  return output;
}

const colorsSafeList = generateColorsSafeList();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [...colorsSafeList],
  theme: {
    colors: { ...generatedColors, white: "white", black: "black" },
    extend: {},
  },
  plugins: [],
};
