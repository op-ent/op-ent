const colors = require("@radix-ui/colors");
const fsp = require("fs").promises;

const MINIFY = process.argv.includes("--minify");
const TAILWINDCSS = process.argv.includes("--tailwindcss");

let fileContent = "";

function add(content) {
  fileContent += `${content}\n`;
}

function handleValue(value) {
  if (TAILWINDCSS) {
    // https://tailwindcss.com/docs/customizing-colors#using-css-variables
    return value.slice(4, -1);
  }
  return value;
}

function defaultColors() {
  add(":root{");

  for (const [name, map] of Object.entries(colors)) {
    if (name.includes("Dark") || name.endsWith("A")) {
      continue;
    }
    add(`/* ${name} */`);
    let i = 0;
    for (const color of Object.values(map)) {
      add(`--rc-${name}-light-${i + 1}: ${handleValue(color)};`);
      i++;
    }

    const darkColor = `${name}Dark`;
    const darkColorMap = colors[darkColor];
    if (darkColorMap) {
      let j = 0;
      for (const color of Object.values(darkColorMap)) {
        add(`--rc-${name}-dark-${j + 1}: ${handleValue(color)};`);
        j++;
      }
    }
  }

  add("}\n\n");
}

function autoColors() {
  const lightColors = {};
  const darkColors = {};
  for (const [name, map] of Object.entries(colors)) {
    if (!name.includes("Dark") || name.endsWith("A")) {
      continue;
    }
    darkColors[name] = map;

    const lightColorName = name.replace("Dark", "");
    const lightColorMap = colors[lightColorName];
    lightColors[lightColorName] = lightColorMap;
  }

  // Handle light colors
  add(":root {");
  for (const [name, map] of Object.entries(lightColors)) {
    add(`/* ${name} */`);
    let i = 0;
    for (const color of Object.values(map)) {
      add(`--rc-${name}-auto-${i + 1}: var(--rc-${name}-light-${i + 1});`);
      i++;
    }
  }
  add("}\n\n");

  // Handle dark colors
  add(".dark:root {");
  for (const [name, map] of Object.entries(darkColors)) {
    add(`/* ${name} */`);
    const lightColorName = name.replace("Dark", "");
    let i = 0;
    for (const color of Object.values(map)) {
      add(
        `--rc-${lightColorName}-auto-${
          i + 1
        }: var(--rc-${lightColorName}-dark-${i + 1});`
      );
      i++;
    }
  }
  add("}");
}

async function main() {
  defaultColors();
  autoColors();

  if (MINIFY) {
    fileContent = fileContent.replace(/\r?\n|\r/g, "");
  }

  await fsp.writeFile("./styles/colors.css", fileContent, "utf8");
}

main();
