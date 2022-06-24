import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Stack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack isInline ml="auto" align="center" mb="1">
      <MoonIcon boxSize="14px" />
      <Switch
        size="md"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
        colorScheme="white"
      />
      <SunIcon boxSize="14px" />
    </Stack>
  );
};

export default ColorModeSwitch;
