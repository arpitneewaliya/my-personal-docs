// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy()],
			title: 'MyDocs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Git',
					items: [
						{ label: 'Basics', slug: 'git/basics' },
					],
				},
				{
					label: 'Linux',
					items: [
						{ label: 'Introduction', slug: 'linux-guide/intro' },
					],
				},
				{
					label: 'Python',
					items: [
						{ label: 'Introduction', slug: 'python/intro' },
					],
				},
			],
		}),
	],
});
