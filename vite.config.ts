import { defineConfig } from "vite"
import path from 'path'
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      outputDir: "./dist/types",
      copyDtsFiles: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/variables.scss";',
      },
    },
  },

  build: {
    lib: {
      entry: "./src/index.ts",
      fileName: (format) => `index.${format}.js`,
      name: 'MyLib',
      formats: ["es"],
    },
    
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: { vue: "Vue" },
      },
    },
  },
})