import React from "react";
import {
  createStyles,
  Switch,
  Group,
  useMantineColorScheme,
} from "@mantine/core";
import { FiSun, FiMoon } from "react-icons/fi";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    "& *": {
      cursor: "pointer",
    },
  },

  icon: {
    pointerEvents: "none",
    position: "absolute",
    zIndex: 1,
    top: 6,
  },

  iconLight: {
    left: 6,
    color: theme.white,
  },

  iconDark: {
    right: 6,
    color: theme.colors.gray[6],
  },
}));

const ColorModeSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes, cx } = useStyles();

  return (
    <Group position="center">
      <div className={classes.root}>
        <FiSun className={cx(classes.icon, classes.iconLight)} size={18} />
        <FiMoon className={cx(classes.icon, classes.iconDark)} size={18} />
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          size="lg"
        />
      </div>
    </Group>
  );
};

export default ColorModeSwitch;
