import { Button, useMantineColorScheme } from "@mantine/core";

const ColorModeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Button
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? "Sun" : "Moon"}
    </Button>
  );
};

export default ColorModeSwitch;
