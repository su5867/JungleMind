import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      onwarn(warning, defaultHandler) {
        const routerClientDirective =
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes('"use client"') &&
          warning.id?.replaceAll('\\', '/').includes('/node_modules/react-router/');

        if (routerClientDirective) return;
        defaultHandler(warning);
      },
    },
  },
});
