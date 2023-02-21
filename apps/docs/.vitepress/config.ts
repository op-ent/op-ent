import { defineConfig } from "vitepress";

export const isProduction =
  process.env.NETLIFY && process.env.CONTEXT === "production";

const META_URL = isProduction
  ? "https://docs.op-ent.fr"
  : "http://localhost:5173";
const META_TITLE = "Documentation d'op-ent";
const META_DESC = "op-ent est un ENT open-source.";
const META_IMAGE = `${META_URL}/og.jpg`;

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  appearance: true,
  title: META_TITLE,
  titleTemplate: "op-ent. L'ENT open-source.",
  lang: "fr-FR",
  lastUpdated: true,
  cleanUrls: true,
  outDir: "./dist",
  head: [
    ["meta", { name: "description", content: META_DESC }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:description", content: META_DESC }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESC }],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        property: "twitter:image",
        content: META_IMAGE,
      },
    ],
  ],
  themeConfig: {
    siteTitle: "op-ent",
    logo: "/logo.svg",
    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/kMFmfSbC2C",
      },
      {
        icon: "github",
        link: "https://github.com/op-ent/op-ent",
      },
    ],
    lastUpdatedText: "Dernière mise à jour ",
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
        text: "A propos",
        link: "/a-propos",
      },
      {
        text: "Communauté",
        link: "/communaute/",
      },
      {
        text: "Site web",
        link: "https://op-ent.fr",
      },
    ],
    sidebar: {
      "/communaute": [
        {
          text: "Communauté",
          link: "/communaute/",
        },
        {
          text: "Obtenir de l'aide",
          link: "/communaute/obtenir-de-l-aide",
        },
        {
          text: "Signaler un bug",
          link: "/communaute/signaler-un-bug",
        },
        {
          text: "Contribuer",
          link: "/communaute/contribuer",
        },
        {
          text: "Structure",
          link: "/communaute/structure",
        },
        {
          text: "Feuille de route",
          link: "/communaute/feuille-de-route",
        },
        {
          text: "Releases",
          link: "https://github.com/op-ent/op-ent/releases",
        },
      ],
    },
  },
});
