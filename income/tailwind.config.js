/** @type {import('tailwindcss').Config} */
module.exports = {
  // plugins: [require("daisyui")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   primary: "#0166FF4",
      //   secondary: "#16A34A",
      //   saaral: "#D1D5DB",
      // },
      colors: {
        primary: "#F3F4F6",
        secondary: "#D1D5DB",
        textHolder: "#94A3B8",
        mainBlue: "#0166FF",
        baseColor: "#1F2937",
        mainGreen: "#16A34A",
      },
    },
  },
  plugins: [require("daisyui")],
};
