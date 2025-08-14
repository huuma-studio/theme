import type { Theme } from "../mod.ts";

import styles from "./css/styles.css.ts";
import variables from "./css/variables.css.ts";
import utils from "./css/utils.css.ts";

import header from "./layout/header.css.ts";
import section from "./layout/section.css.ts";
import footer from "./layout/footer.css.ts";

import benefits from "./section/benefits.css.ts";
import contact from "./section/contact.css.ts";
import hero from "./section/hero.css.ts";
import imageBanner from "./section/image-banner.css.ts";
import integrations from "./section/integrations.css.ts";
import pricing from "./section/pricing.css.ts";
import support from "./section/support.css.ts";

import fader from "./fader.css.ts";
import table from "./table.css.ts";

const THEME_NAME = "tile";

export const tile: Theme = {
  stylesheets: [{
    name: `${THEME_NAME}/styles.css`,
    content: buff(styles),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/variables.css`,
    content: buff(variables),
    entrypoint: false,
  }, {
    name: `${THEME_NAME}/utils.css`,
    content: buff(utils),
    entrypoint: false,
  }, /* Layout */ {
    name: `${THEME_NAME}/header.css`,
    content: buff(header),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/footer.css`,
    content: buff(footer),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/section.css`,
    content: buff(section),
    entrypoint: true,
  }, /* Sections  */ {
    name: `${THEME_NAME}/benefits.css`,
    content: buff(benefits),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/hero.css`,
    content: buff(hero),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/image-banner.css`,
    content: buff(imageBanner),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/pricing.css`,
    content: buff(pricing),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/integrations.css`,
    content: buff(integrations),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/contact.css`,
    content: buff(contact),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/support.css`,
    content: buff(support),
    entrypoint: true,
  }, /* Elements */ {
    name: `${THEME_NAME}/table.css`,
    content: buff(table),
    entrypoint: true,
  }, {
    name: `${THEME_NAME}/fader.css`,
    content: buff(fader),
    entrypoint: true,
  }],
};

function buff(content: string): Uint8Array<ArrayBuffer> {
  return new TextEncoder().encode(content) as Uint8Array<ArrayBuffer>;
}
