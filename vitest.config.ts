import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: [
      'src/**/__tests__/*.test.ts',
      'src/**/__tests__/*.test.tsx',
    ],
    coverage: {
      exclude: ['**/index.ts'],
    },
    setupFiles: ['./vitest-setup.ts'],
  },
});
