import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
			// permitir leer archivos de la carpeta uploads
      allow: [searchForWorkspaceRoot(process.cwd()), '/static/uploads'],
    },
    port: 3000,
  },
})
