import { defineConfig } from '@pandacss/dev';
import typographyPreset from 'pandacss-preset-typography';

export default defineConfig({
	presets: [
		typographyPreset(),
		'pform-reset',
		'@pandacss/preset-panda',
		'@shadow-panda/preset',
	],

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: 'styled-system',

	jsxFramework: 'react',

	globalCss: {
		extend: {
			body: {
				bg: 'slate.800',
			},
		},
	},
});

// ?pform-reset says this, ensure it will not break something:
// Then make sure your globalCss and utilities are extendable, if you are using them in your config.
// panda.config.*
// export default defineConfig({
//   //...
//   utilities: {
//     extend: {
//       // ...
//     },
//   },
//   globalCss: {
//     extend: {
//       // ...
//     },
//   },
// })
