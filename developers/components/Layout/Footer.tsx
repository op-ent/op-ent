import { Anchor, Box, Container, Text } from "@mantine/core";
import Link from "next/link";

export default function () {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        marginTop: "auto",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[2],
      })}
    >
      <Container size="xl" px="md" py="xs">
        <Text color="dimmed">
          &copy; {new Date().getFullYear()} open-dw. All rights reserved. Made
          by{" "}
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
