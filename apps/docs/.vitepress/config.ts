import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  appearance: true,
  title: "Documentation d'op-ent",
  titleTemplate: "op-ent. L'ENT open-source.",
  lang: "fr-FR",
  lastUpdated: true,
  cleanUrls: true,
  outDir: "./dist",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  themeConfig: {
    siteTitle: false,
    logo: "/logo.svg",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/op-ent/op-ent",
      },
    ],
    editLink: {
      pattern: "https://github.com/op-ent/op-ent/edit/main/apps/docs/:path",
      text: "Suggérer des modifications",
    },
    footer: {
      copyright: "Copyright © 2022-present Florian LEFEBVRE",
      message: "Diffusé sous la licence GNU GPLv3.",
    },
    nav: [
      {
        text: "Accueil",
        link: "/",
      },
      {
        text: "Contribuer",
        link: "/contribuer",
      },
      {
        text: "Site web",
        link: "https://op-ent.fr",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Contribuer",
          items: [
            {
              text: "Introduction",
              link: "/",
            },
          ],
        },
      ],
    },
  },
});
