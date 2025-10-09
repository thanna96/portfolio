import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundSize: {
        "50": "50%!important",
        "100": "100%!important",
      },
      height: {
        "90": "90%",
      },
    },
  },
};

export default config;