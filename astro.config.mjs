// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://toni-hintikka.workers.dev',
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
			editLink: {
				baseUrl: 'https://github.com/tonihintikka/toni-hintikka/edit/main/',
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
