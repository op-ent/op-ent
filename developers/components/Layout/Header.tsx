import {
  Container,
  Group,
  Box,
  Stack,
  Text,
  Button,
  createStyles,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import Link from "next/link";
import { FiTerminal } from "react-icons/fi";
import ColorModeSwitch from "~/components/ColorModeSwitch";

const useStyles = createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: "none",
    userSelect: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderRadius: theme.radius.md,
  },
}));

export default function () {
  const { classes } = useStyles();

  return (
    <Box
      component="header"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[2],
      })}
    >
      <Container size="xl" px="md" py="xs">
        <Group position="apart">
          <Link href="/">
            <a className={classes.logo}>
              <Group>
                <FiTerminal size={35} />
                <Stack spacing={0}>
                  <Text size="xl" weight="semibold">
                    open-dw
                  </Text>
                  <Text size="sm" color="dimmed">
                    Developer portal
                  </Text>
                </Stack>
              </Group>
            </a>
          </Link>
          <Group>
            <ColorModeSwitch />
            <Button
              onClick={() =>
                showNotification({
                  color: "yellow",
                  title: "Not implemented yet",
                  message:
                    "open-dw is still in development and this feature is not yet implemented.",
                })
              }
            >
              LOGIN
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
