import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
});
