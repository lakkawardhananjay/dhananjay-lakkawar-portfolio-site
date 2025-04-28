import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";  // Only one react plugin
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: '/lakkaward.github.io/',  // <-- comma added here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
