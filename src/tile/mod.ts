import type { Theme } from "../mod.ts";

const THEME_NAME = "tile";

console.log(import.meta.resolve("./css/styles.css"));

export const tile: Theme = {
  stylesheets: [{
    name: `${THEME_NAME}/styles.css`,
    content: await Deno.readFile(import.meta.resolve("./css/styles.css")),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/variables.css`,
    content: await Deno.readFile(import.meta.resolve("./css/variables.css")),
    entrypoint: false,
  }, {
    name: `${THEME_NAME}/utils.css`,
    content: await Deno.readFile(import.meta.resolve("./css/utils.css")),
    entrypoint: false,
  }, /* Layout */ {
    name: `${THEME_NAME}/header.css`,
    content: await Deno.readFile(import.meta.resolve("./layout/header.css")),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/footer.css`,
    content: await Deno.readFile(import.meta.resolve("./layout/footer.css")),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/section.css`,
    content: await Deno.readFile(import.meta.resolve("./layout/section.css")),
    entrypoint: true,
  }, /* Sections  */ {
    name: `${THEME_NAME}/hero.css`,
    content: await Deno.readFile(import.meta.resolve("./sections/hero.css")),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/image-banner.css`,
    content: await Deno.readFile(
      import.meta.resolve("./sections/image-banner.css"),
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/benefits.css`,
    content: await Deno.readFile(
      import.meta.resolve("./sections/benefits.css"),
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/pricing.css`,
    content: await Deno.readFile(
      import.meta.resolve("./sections/pricing.css"),
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/integrations.css`,
    content: await Deno.readFile(
      import.meta.resolve("./sections/integrations.css"),
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/support.css`,
    content: await Deno.readFile(
      import.meta.resolve("./sections/support.css"),
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/contact.css`,
    content: await Deno.readFile(
      import.meta.resolve("./sections/contact.css"),
    ),
    entrypoint: true,
  }, /* Elements */ {
    name: `${THEME_NAME}/table.css`,
    content: await Deno.readFile(
      import.meta.resolve("./elements/table.css"),
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/fader.css`,
    content: await Deno.readFile(
      import.meta.resolve("./elements/fader.css"),
    ),
    entrypoint: true,
  }],
};
