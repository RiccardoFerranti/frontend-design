/** @type {import("eslint").Linter.Config} */
// biome-ignore lint/performance/noBarrelFile: ESLint config entry point, re-exports shared config
export { config as default } from "@workspace/eslint-config/react-internal";
