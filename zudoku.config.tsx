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
  docs: {
    defaultOptions: {
      toc: true,
      disablePager: false,
      showLastModified: true,
    }
  },
  search: {
    type: "pagefind",
    // Optional: Maximum number of sub results per page
    maxSubResults: 3,
    // Optional: Configure search result ranking (defaults shown below)
    ranking: {
      termFrequency: 0.8,
      pageLength: 0.6,
      termSimilarity: 1.2,
      termSaturation: 1.2,
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
            },
            {
              type: "category",
              label: "Env",
              items: [
                "/cli/env/commands",
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
  },
  
};

export default config;
