/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        SpoqaHanSansNeo: [
          "Spoqa Han Sans Neo",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: {
          1: "#D8EEFF",
          2: "#B1DBFF",
          3: "#8AC4FF",
          4: "#6DAFFF",
          5: "#3D8DFF",
          6: "#2C6DDB",
          7: "#1E50B7",
          8: "#133893",
        },
        white: "#FFFFFF",
        gray: {
          1: "#F3F5F7",
          2: "#E7EBEF",
          3: "#DAE0E7",
          4: "#CED6DF",
          5: "#C1CBD7",
          6: "#B4C0CF",
          7: "#A8B6C7",
          8: "#9BACBF",
          9: "#8FA2B7",
          10: "#8398AF",
          11: "#768EA7",
          12: "#6A84A0",
          13: "#5F7A95",
          14: "#587089",
          15: "#50657C",
          16: "#485B70",
          17: "#405064",
          18: "#384657",
          19: "#303C4B",
          20: "#28323E",
          21: "#202832",
          22: "#181E25",
          23: "#101419",
          24: "#080A0C",
        },
        black: "#000000",
      },
      fontSize: {
        typography: [
          "48px",
          {
            lineHeight: "56px",
            // font-weight: 700;
          },
        ],
        // HEADING
        h1: [
          "96px",
          {
            lineHeight: "104px",
            // font-weight: 700;
          },
        ],
        h2: [
          "60px",
          {
            lineHeight: "68px",
            // font-weight: 700;
          },
        ],
        h3: [
          "48px",
          {
            lineHeight: "56px",
            // font-weight: 700;
          },
        ],
        h4: [
          "34px",
          {
            lineHeight: "42px",
            // font-weight: 700;
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "36px",
            // font-weight: 700;
          },
        ],
        h6: [
          "20px",
          {
            lineHeight: "28px",
            // font-weight: 700;
          },
        ],
        // TITLE
        title1: [
          "18px",
          {
            lineHeight: "28px",
            // font-weight: 700;
          },
        ],
        title2: [
          "16px",
          {
            lineHeight: "24px",
            // font-weight: 700;
          },
        ],
        // SUBTITLE
        subTitle1: [
          "18px",
          {
            lineHeight: "28px",
            // fontWeight: "400",
          },
        ],
        subTitle2: [
          "16px",
          {
            lineHeight: "24px",
            // fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
