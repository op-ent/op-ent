import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  type ComponentStyleConfig,
} from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

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

const components: Record<string, ComponentStyleConfig> = {
  Input: {
    defaultProps: {
      focusBorderColor: "brand.400",
    },
  },
};

const theme = extendTheme(
  {
    styles: {
      global: (props: GlobalStyleProps) => ({
        "html, body": {
          background: mode("gray.50", "gray.800")(props),
        },
        body: {
          transitionProperty: "all",
          transitionDuration: "normal",
        },
      }),
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
    // components: {
    // Input,
    // },
    components,
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
