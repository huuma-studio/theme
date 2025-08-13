import type { Theme } from "../mod.ts";

const THEME_NAME = "tile";

console.log(import.meta.resolve("./css/styles.css"));

export const tile: Theme = {
  stylesheets: [{
    name: `${THEME_NAME}/styles.css`,
    content:
      (await import("./css/styles.css", { with: { type: "bytes" } })).default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/variables.css`,
    content: (await import("./css/variables.css", { with: { type: "bytes" } }))
      .default,
    entrypoint: false,
  }, {
    name: `${THEME_NAME}/utils.css`,
    content: (await import("./css/utils.css", { with: { type: "bytes" } }))
      .default,
    entrypoint: false,
  }, /* Layout */ {
    name: `${THEME_NAME}/header.css`,
    content: (await import("./layout/header.css", { with: { type: "bytes" } }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/footer.css`,
    content: (await import("./layout/footer.css", { with: { type: "bytes" } }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/section.css`,
    content: (await import("./layout/section.css", { with: { type: "bytes" } }))
      .default,
    entrypoint: true,
  }, /* Sections  */ {
    name: `${THEME_NAME}/hero.css`,
    content: (await import("./section/hero.css", { with: { type: "bytes" } }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/image-banner.css`,
    content:
      (await import("./section/image-banner.css", { with: { type: "bytes" } }))
        .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/benefits.css`,
    content:
      (await import("./section/benefits.css", { with: { type: "bytes" } }))
        .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/pricing.css`,
    content: (await import("./section/pricing.css", {
      with: { type: "bytes" },
    }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/integrations.css`,
    content: (await import("./section/integrations.css", {
      with: { type: "bytes" },
    }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/support.css`,
    content: (await import("./section/support.css", {
      with: { type: "bytes" },
    }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/contact.css`,
    content: (await import("./section/contact.css", {
      with: { type: "bytes" },
    }))
      .default,
    entrypoint: true,
  }, /* Elements */ {
    name: `${THEME_NAME}/table.css`,
    content: (await import("./table.css", {
      with: { type: "bytes" },
    }))
      .default,
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/fader.css`,
    content: (await import("./table.css", {
      with: { type: "bytes" },
    }))
      .default,
    entrypoint: true,
  }],
};
