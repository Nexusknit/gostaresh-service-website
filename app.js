export { default } from "./app.vue";

(async () => {
  await import("./.output/server/index.mjs");
})();
