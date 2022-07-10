import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { classNames, theme } from "~/lib/theme";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { GetServerSidePropsContext } from "next";
import { NotificationsProvider } from "@mantine/notifications";
import Layout from "~/components/Layout/Layout";
import { useCSV } from "~/hooks/useColorSchemeValue";

function App({
  Component,
  pageProps,
  colorScheme: _colorScheme,
}: AppProps & { colorScheme: ColorScheme }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(_colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html")[0];
    if (colorScheme === "light") {
      htmlEl.classList.remove("dark");
    } else {
      htmlEl.classList.add("dark");
    }
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{ ...theme, colorScheme }}
        classNames={classNames}
      >
        <Global
          styles={(theme) => ({
            ":root": {
              colorScheme: theme.colorScheme,
            },
            body: {
              backgroundColor: useCSV(
                theme.colors.gray[0],
                theme.colors.dark[8]
              ),
            },
          })}
        />
        <NotificationsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default App;
