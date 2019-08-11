const pkg = require('./package.json');

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'internet-points',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: `/favicon.png`
            }
        ]
    },
    modules: [
        '@nuxtjs/axios',
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-XXXXXXX-X'
            }
        ]
    ],
    axios: {
        baseURL: process.server
            ? `http://${process.env.HOST || 'localhost'}:${process.env.PORT ||
                  3000}`
            : `/`
    },
    /*
     ** Global CSS
     */
    css: ['~/assets/css/main.css'],
    build: {
        html: {
            minify: {
                collapseWhitespace: false,
                removeEmptyAttributes: false
            }
        },
        /*
         ** Run ESLINT on save
         */
        extend(config, ctx) {
            if (ctx.isClient && process.env.NODE_ENV !== 'production') {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    },
    generate: {
        dir: 'public'
    }
};
