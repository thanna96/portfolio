const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
} satisfies import("tailwindcss").Config;

export default config;