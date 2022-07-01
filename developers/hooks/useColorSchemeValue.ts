import {
  ColorScheme,
  MantineTheme,
  useMantineColorScheme,
} from "@mantine/core";

export const useColorSchemeValue = (
  light: any,
  dark: any,
  theme?: MantineTheme
) => {
  let colorScheme: ColorScheme;
  if (theme) {
    colorScheme = theme.colorScheme;
  } else {
    const { colorScheme: _colorScheme } = useMantineColorScheme();
    colorScheme = _colorScheme;
  }
  return colorScheme === "light" ? light : dark;
};

export const useCSV = useColorSchemeValue;
