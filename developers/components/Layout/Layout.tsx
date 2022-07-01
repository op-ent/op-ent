import { Box } from "@mantine/core";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function ({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      })}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
