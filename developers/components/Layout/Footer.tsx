import { Anchor, Box, Container, Text } from "@mantine/core";
import Link from "next/link";
import { useCSV } from "~/hooks/useColorSchemeValue";

export default function () {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        marginTop: "auto",
        backgroundColor: useCSV(theme.white, theme.colors.dark[7]),
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: useCSV(theme.colors.gray[2], theme.colors.dark[6]),
      })}
    >
      <Container size="xl" px="md" py="xs">
        <Text color="dimmed">
          &copy; {new Date().getFullYear()} op-ent. All rights reserved. Made by{" "}
          <Link href="https://florian-lefebvre.dev" passHref>
            <Anchor component="a" target="_blank">
              Florian LEFEBVRE
            </Anchor>
          </Link>
          .
        </Text>
      </Container>
    </Box>
  );
}
