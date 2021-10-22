import { defineConfig } from 'dumi';

export default defineConfig({
    title: '@tms/sF-front-repo',
    outputPath: 'docs-dist',
    mode: 'site',
    navs: [
        {
            title: 'Hook',
            path: '/hook',
        },
        {
            title: 'Component',
            path: '/component',
        },
        {
            title: 'Eslint',
            path: '/eslint',
        },
    ],
    // more config: https://d.umijs.org/config
});
