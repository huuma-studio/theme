import { log } from "@huuma/route/utils/logger";

export async function tailwind() {
  const command = new Deno.Command("deno", {
    args: [
      "run",
      "-A",
      "npm:@tailwindcss/cli",
      "-i",
      "src/styles.css",
      "-o",
      "static/styles.css",
      "--minify",
    ],
  });

  const { code, stderr } = await command.output();
  if (code !== 0) {
    console.error(new TextDecoder().decode(stderr));
  } else {
    log("TAILWINDCSS", "Styles compiled successfully.", "Huuma/Task");
  }
}
