import type { Stylesheet, UIApp } from "@huuma/ui/server";
import type { AppContext } from "@huuma/route";

export interface Theme {
  stylesheets: Stylesheet[];
}

export function setupTheme(
  app: UIApp<AppContext>,
  theme: Theme,
) {
  for (const stylesheet of theme.stylesheets) {
    app.addStylesheet(stylesheet);
  }
}
