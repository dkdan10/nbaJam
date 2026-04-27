import { defineConfig } from 'vite';

export default defineConfig({
  base: '/nbaJam/',
  test: {
    environment: 'jsdom',
    globals: true
  }
});
