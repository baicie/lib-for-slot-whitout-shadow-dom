import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.tsx"], // 指定入口文件，这里假设入口文件是 src/index.tsx
  format: ["esm", "cjs"], // 打包格式：ES Module 和 CommonJS
  outDir: "dist", // 输出目录
  tsconfig: "./tsconfig.json",
});
