import { svelte } from '@sveltejs/vite-plugin-svelte';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';

const PORT = 8080;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), basicSsl()],
  base: '',
  server: {
    https: true,
    port: PORT,
    open: createDevReportUrl()
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    sourcemap: true,
    target: 'es2020'
  }
});

function createDevReportUrl(): string | boolean {
  try {
    const { host, workspace } = JSON.parse(readFileSync('./lxr.json').toString());
    return `https://${host}/${workspace}/reports/dev/new?url=https://localhost:${PORT}`;
  } catch {
    // In case anything goes wrong (e.g. lxr.json is missing),
    // we disable opening the browser automatically
    return false;
  }
}
