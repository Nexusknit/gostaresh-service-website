module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PeydaWeb", "IranSans", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
