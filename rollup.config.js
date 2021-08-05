const path = require("path");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
const clear = require("rollup-plugin-clear");
const typescript = require("rollup-plugin-typescript2");
const filesize = require("rollup-plugin-filesize");

const resolveFile = function(filePath) {
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
      // pure_funcs: ["console.log"],
    },
  }),
  filesize(),
];
module.exports = {
  input: resolveFile("src/index.ts"),
  output: [
    {
      file: resolveFile("dist/vue3-i18n.common.js"),
      format: "commonjs",
      globals: {
        vue: "Vue",
      },
    },
    {
      file: resolveFile("dist/vue3-i18n.esm.js"),
      format: "esm",
      globals: {
        vue: "Vue",
      },
    },
    {
      file: resolveFile("dist/vue3-i18n.js"),
      format: "umd",
      name: "Vue3I18n",
      globals: {
        vue: "Vue",
      },
    },
  ],
  plugins: plugins,
  external: ["vue"],
};
