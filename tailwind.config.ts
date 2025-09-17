import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/features/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundSize: {
                50: "50%!important",
                100: "100%!important",
            },
            height: {
                90: "90%",
            },
        },
    },
    plugins: [],
};

export default config;