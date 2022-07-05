import {
  MantineThemeOverride,
  Tuple,
  DefaultMantineColor,
  DEFAULT_THEME,
} from "@mantine/core";

type ExtendedCustomColors = "brand" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

DEFAULT_THEME.colors.indigo;

export const theme: MantineThemeOverride = {
  colors: {
    brand: DEFAULT_THEME.colors.indigo,
  },
  primaryColor: "indigo",
  fontFamily: "Outfit, sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', monospace",
  headings: { fontFamily: "Outfit, sans-serif" },
};

export const classNames: Record<string, Record<string, string>> = {};
