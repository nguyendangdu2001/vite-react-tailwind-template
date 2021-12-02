// import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";
// import { resolve } from "path";
// import eslint from "@rbnlffl/rollup-plugin-eslint";
// // import eslintPlugin from "vite-plugin-eslint";
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//     eslint({
//       extensions: ["js", "jsx", "ts", "tsx"],
//       filterInclude: ["**/*.{js,ts,jsx,tsx}"],
//       throwOnError: true,
//     }),
//   ],
//   // define: {
//   //   global: "window",
//   // },
//   resolve: {
//     alias: {
//       "@pages": resolve(__dirname, "./src/pages"),
//       "@modules": resolve(__dirname, "./src/modules"),
//       "@routes": resolve(__dirname, "./src/routes"),
//       "@app": resolve(__dirname, "./src/app"),

//       "@hooks": resolve(__dirname, "./src/common/hooks"),
//       "@components": resolve(__dirname, "./src/common/components"),
//       "@action": resolve(__dirname, "./src/redux/action"),
//       "@config": resolve(__dirname, "./src/config"),
//       "@helper": resolve(__dirname, "./src/helper"),
//       "@assets": resolve(__dirname, "./src/assets"),
//       "@data": resolve(__dirname, "./src/data"),
//       "@redux": resolve(__dirname, "./src/redux"),
//       "@icon": resolve(__dirname, "./src/common/components/icons"),
//     },
//   },
// });
import reactRefresh from "@vitejs/plugin-react-refresh";
import eslint from "@rbnlffl/rollup-plugin-eslint";
import { resolve } from "path";
// https://vitejs.dev/config/
/**
 * @type {import('vite').UserConfig}
 */
const config = ({ command }) => ({
  plugins: [
    reactRefresh(),
    eslint({
      extensions: ["js", "jsx", "ts", "tsx"],
      filterInclude: ["**/*.{js,ts,jsx,tsx}"],
      throwOnError: true,
    }),
  ],
  base: command === "serve" ? "" : "/dist/",
  build: {
    manifest: true,
  },
  // define: {
  //   global: "window",
  // },
  resolve: {
    alias: {
      "@pages": resolve(__dirname, "./src/pages"),
      "@services": resolve(__dirname, "./src/services"),
      "@modules": resolve(__dirname, "./src/modules"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@app": resolve(__dirname, "./src/app"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@components": resolve(__dirname, "./src/components"),
      "@action": resolve(__dirname, "./src/redux/action"),
      "@config": resolve(__dirname, "./src/config"),
      "@helper": resolve(__dirname, "./src/helper"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@data": resolve(__dirname, "./src/data"),
      "@redux": resolve(__dirname, "./src/redux"),
      "@icon": resolve(__dirname, "./src/common/components/icons"),
    },
  },
});
export default config;
