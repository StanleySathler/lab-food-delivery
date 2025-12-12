/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Required by @testing-library/jest-dom
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
});
