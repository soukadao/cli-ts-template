import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ["src/**/*.test.ts"],
          name: "unit",
          environment: "node",
        },
      },
    ],
    coverage: {
      provider: "v8",
      reporter: ["text"],
      include: ["src/**"],
      exclude: ["src/**/*.test.ts", "src/**/*.e2e.ts"],
    },
  },
});
