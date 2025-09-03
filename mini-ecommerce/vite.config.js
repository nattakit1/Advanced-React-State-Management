import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // สำคัญ: ให้ Netlify โหลด asset ถูกต้อง
});
