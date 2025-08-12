import { Theme } from "../theme.ts";

const THEME_NAME = "tetra";

export const tetra: Theme = {
  stylesheets: [{
    name: `${THEME_NAME}/styles.css`,
    content: await Deno.readFile(import.meta.dirname! + "/css/styles.css"),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/variables.css`,
    content: await Deno.readFile(import.meta.dirname! + "/css/variables.css"),
    entrypoint: false,
  }, {
    name: `${THEME_NAME}/utils.css`,
    content: await Deno.readFile(import.meta.dirname! + "/css/utils.css"),
    entrypoint: false,
  }, /* Layout */ {
    name: `${THEME_NAME}/header.css`,
    content: await Deno.readFile(import.meta.dirname! + "/layout/header.css"),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/main.css`,
    content: await Deno.readFile(import.meta.dirname! + "/layout/main.css"),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/footer.css`,
    content: await Deno.readFile(import.meta.dirname! + "/layout/footer.css"),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/section.css`,
    content: await Deno.readFile(import.meta.dirname! + "/layout/section.css"),
    entrypoint: true,
  }, /* Sections  */ {
    name: `${THEME_NAME}/hero.css`,
    content: await Deno.readFile(import.meta.dirname! + "/sections/hero.css"),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/image-banner.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/sections/image-banner.css",
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/benefits.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/sections/benefits.css",
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/pricing.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/sections/pricing.css",
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/integrations.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/sections/integrations.css",
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/support.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/sections/support.css",
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/contact.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/sections/contact.css",
    ),
    entrypoint: true,
  }, /* Elements */ {
    name: `${THEME_NAME}/table.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/table.css",
    ),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/fader.css`,
    content: await Deno.readFile(
      import.meta.dirname! + "/fader.css",
    ),
    entrypoint: true,
  }],
};
