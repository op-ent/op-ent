const colors = require("@radix-ui/colors");

function generateColors() {
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
    _colors[name] = _map;
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
    _colors[`${name}Auto`] = _map;
  }

  return _colors;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: generateColors(),
    extend: {},
  },
  plugins: [],
};
