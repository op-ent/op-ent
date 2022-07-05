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
import ColorModeSwitch from "~/components/ColorSchemeSwitch";
import { useCSV } from "~/hooks/useColorSchemeValue";

const useStyles = createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: "none",
    userSelect: "none",
    color: useCSV(theme.black, theme.white),
    borderRadius: theme.radius.md,
  },
}));

export default function () {
  const { classes } = useStyles();

  return (
    <Box
      component="header"
      sx={(theme) => ({
        backgroundColor: useCSV(theme.white, theme.colors.dark[7]),
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: useCSV(theme.colors.gray[2], theme.colors.dark[6]),
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
                    op-ent
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
                    "op-ent is still in development and this feature is not yet implemented.",
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
