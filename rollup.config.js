const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
const clear = require("rollup-plugin-clear");
const typescript = require("rollup-plugin-typescript2");

const resolveFile = function (filePath) {
  return path.join(__dirname, ".", filePath);
};
const babelOptions = {
  babelHelpers: "bundled",
  presets: ["@babel/preset-env"],
};
const plugins = [
  clear({
    targets: ["dist"],
  }),
  typescript({
    tsconfig: path.resolve(__dirname, "tsconfig.json"),
    tsconfigOverride: {
      compilerOptions: {
        outDir: "dist",
      },
    },
  }),
  nodeResolve(),
  commonjs(),
  babel(babelOptions),
  terser({
    compress: {
      ecma: 2015,
      pure_getters: true,
      pure_funcs: ["console.log"],
    },
  }),
];
module.exports = [
  {
    input: resolveFile("src/index.ts"),
    output: {
      file: resolveFile("dist/index.umd.js"),
      format: "umd",
      name: "i18n",
      globals: {
        vue: "Vue",
      },
    },
    plugins: plugins,
    external: ["vue"],
  },
  {
    input: resolveFile("src/index.ts"),
    output: {
      file: resolveFile("dist/index.esm.js"),
      format: "esm",
      globals: {
        vue: "Vue",
      },
    },
    plugins: plugins,
    external: ["vue"],
  },
];
