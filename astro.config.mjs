// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.tonihintikka.workers.dev',
	prefetch: true,
	integrations: [
		starlight({
			title: 'Toni Hintikka',
			description:
				'Konsultti ja agentic engineering -käytäntöjen rakentaja. Autan tiimejä ottamaan AI-työkalut käyttöön ilman turhaa lukitusta.',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Suomi',
					lang: 'fi',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/tonihintikka',
				},
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			editLink: {
				baseUrl: 'https://github.com/tonihintikka/toni-hintikka/edit/master/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Sivusto',
					items: [
						{ label: 'Etusivu', slug: 'index' },
						{ label: 'Työ', slug: 'tyo' },
						{ label: 'Lähestymistapa', slug: 'lahestymistapa' },
						{ label: 'Yhteystiedot', slug: 'yhteystiedot' },
					],
				},
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#0c1210',
					},
				},
			],
		}),
	],
});
