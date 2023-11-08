import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			stylus: {
				imports: [path.resolve(__dirname, 'src/lib/css/global.styl')]
			}
		}
	}
});