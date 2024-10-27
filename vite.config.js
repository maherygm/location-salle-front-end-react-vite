import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // Utilisez le plugin dotenv pour charger les variables d'environnement
      // configureServer({ app }) {
      //   dotenv.config();
      // },
      // name: "dotenv",
      // setup(build) {
      //   // Charger les variables d'environnement depuis .env
      //   build.define("process.env", JSON.stringify(process.env));
      // },
    },
  ],
  assetsInclude: ["**/*.glb"],
});
