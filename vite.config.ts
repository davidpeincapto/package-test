import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"), // Asegúrate de que la ruta de entrada sea correcta
      name: "MyComponentLibrary",
      fileName: (format) => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      // Asegúrate de externalizar dependencias que no deben incluirse en el paquete
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
