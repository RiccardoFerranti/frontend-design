/** @type {import("eslint").Linter.Config} */
// biome-ignore lint/performance/noBarrelFile: ESLint config entry point, re-exports shared config
export { nextJsConfig as default } from "@workspace/eslint-config/next-js";
