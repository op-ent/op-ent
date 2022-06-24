import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#dafff8",
    100: "#b0fbea",
    200: "#83f8dc",
    300: "#55f4ce",
    400: "#28f0bf",
    500: "#0fd7a6",
    600: "#00a781",
    700: "#00775b",
    800: "#004936",
    900: "#001a10",
  },
};

const theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          transitionProperty: "all",
          transitionDuration: "normal",
        },
      },
    },
    config: {
      disableTransitionOnChange: false,
    },
    colors,
    fonts: {
      heading: "Anybody, cursive",
      body: "Outfit, sans-serif",
      monospace: "'JetBrains Mono', monospace",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
