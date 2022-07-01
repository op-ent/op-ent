import { Container, Group, Box, Stack, Text, Button } from "@mantine/core";
import ColorModeSwitch from "~/components/ColorModeSwitch";

export default function () {
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
          <Stack spacing={0}>
            <Text size="xl" weight="semibold">
              open-dw
            </Text>
            <Text size="sm" color="dimmed">
              Developer portal
            </Text>
          </Stack>
          <Group>
            <ColorModeSwitch />
            <Button>LOGIN</Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
