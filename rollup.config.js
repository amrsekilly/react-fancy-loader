import del from "rollup-plugin-delete";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  {
    input: "src/Components/Loaders/index.js",
    output: [{ file: pkg.module, format: "esm" }],
    plugins: [
      resolve(),
      babel({
        presets: ["react-app"],
        plugins: [
          "@babel/plugin-proposal-object-rest-spread",
          "@babel/plugin-proposal-optional-chaining",
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-class-properties",
          "transform-react-remove-prop-types",
        ],
        exclude: "node_modules/**",
        runtimeHelpers: true,
      }),
      terser(),
      del({ targets: ["build/*"] }),

      json(),
    ],
    external: ["styled-components", "react"],
    globals: { "styled-components": "styled" },
  },
];
