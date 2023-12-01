module.exports = {
  plugins: {
    "postcss-import": {
      from: "src/css/main.css",
    },
    "tailwindcss": {},
    "autoprefixer": {},
    "@fullhuman/postcss-purgecss": {
      content: ["./**/*.tsx"],
    },
    "cssnano": {
      preset: "default",
    },
  },
};
