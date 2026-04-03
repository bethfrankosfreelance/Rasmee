import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

// https://bitejs.dev
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/Rasmee/",
})
