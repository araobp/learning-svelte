import adapter from '@sveltejs/adapter-static';

export default {
	compilerOptions: {
        customElement: true
        // other compiler options ...
    },
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: '../docs',
			assets: '../docs',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};