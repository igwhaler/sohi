module.exports = {
    // outputDir: '../staging-oa-h5/dist',
    // outputDir: '../oa-h5-dist/dist',
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    /* blue: '#1262FF',
                    red: '#e9610c',
                    orange: '#FF8B26',
                    green: '#15BC83',
                    'text-color': '#333333',
                    'background-color': '#ffffff' */
                }
            }
        }
    },
    productionSourceMap: false,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        disableHostCheck: true,
        // host: 'test.oa.ts.youpin.srv',
        host: '0.0.0.0',
        port: 8880,
        open: true,
        proxy: false
    },
    configureWebpack: {
        resolve: {
            alias: {
                'utils': '@/utils'
            }
        }
    }
};
