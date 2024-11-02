import * as path from 'path'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'clover'],
    }
  },
  resolve: {
    alias: {
      "@application/*": path.resolve(__dirname, "./src/application/*"),
      "@domain/*": path.resolve(__dirname, "./src/domain/*"),
      "@infra/*": path.resolve(__dirname, "./src/infra/*"),
      "@database/*": path.resolve(__dirname, "./src/infra/database/*"),
      "@adapters/*": path.resolve(__dirname, "./src/infra/adapters/*"),
      "@shared/*": path.resolve(__dirname, "./src/shared/*"),
    }
  }
})