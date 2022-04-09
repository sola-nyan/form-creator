import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "FormCreator",
      fileName: (format) => `form-creator.${format}.js`,
    },
  },
})