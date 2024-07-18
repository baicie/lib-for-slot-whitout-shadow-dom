import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import { fileURLToPath } from "url";

// 将 import.meta.url 转换为文件路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  // esbuild: {
  //   jsxFactory: "h",
  //   jsxFragment: "Fragment",
  //   jsxInject: `import { h, Fragment } from 'preact'`,
  // },
  plugins: [preact()],
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/preact/compat"),
    },
  },
});
