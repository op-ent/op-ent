import {
  MantineThemeOverride,
  Tuple,
  DefaultMantineColor,
} from "@mantine/core";

type ExtendedCustomColors = "brand" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

const theme: MantineThemeOverride = {
  colors: {
    brand: [
      "#dafff8",
      "#b0fbea",
      "#83f8dc",
      "#55f4ce",
      "#28f0bf",
      "#0fd7a6",
      "#00a781",
      "#00775b",
      "#004936",
      "#001a10",
    ],
  },
  primaryColor: "brand",
  fontFamily: "Outfit, sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', monospace",
  headings: { fontFamily: "Outfit, sans-serif" },
};

export default theme;
