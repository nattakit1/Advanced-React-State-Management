import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Advanced-React-State-Management/mini-ecommerce/", // <-- ชื่อ repo ของคุณ
});
