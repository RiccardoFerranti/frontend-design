/** @type {import("eslint").Linter.Config} */
import { nextJsConfig } from "@workspace/eslint-config/next-js";

export default [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
  ...nextJsConfig,
];
