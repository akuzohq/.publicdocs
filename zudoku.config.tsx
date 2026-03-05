import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/",
  site: {
    logo: {
      src: { light: "/logo.svg", dark: "/logo.svg" },
      alt: "Akuzo",
      width: "30px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            "/createaccount",
          ],
        },
        {
          type: "category",
          label: "Services",
          items: [
            {
              type: "category",
              label: "Applications",
              items: [
                "/applications/introduction",
                "/applications/editions",
              ],
            }
          ],
        }
      ],
    },
    {
    type: "category",
      label: "CLI",
      items: [
        "/cli/introduction",
        {
          type: "category",
          label: "CLI reference",
          items: [
            {
              type: "category",
              label: "App",
              items: [
                "/cli/app/commands",
              ],
            }
          ],
        }
      ]
    }
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  metadata : {
    favicon: "/logo.svg",
    publisher: "Akuzo",
    creator: "Akuzo",
    referrer: "no-referrer",
  }
};

export default config;
