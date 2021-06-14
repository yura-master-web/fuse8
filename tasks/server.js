import {create as browserSync} from 'browser-sync'
import debuga from 'debuga'
// import history from 'connect-history-api-fallback'
import yn from 'yn'
// import proxy from 'http-proxy-middleware';

export const bs = browserSync('server')
// eslint-disable-next-line
const {PORT, OPEN, NODE_ENV, NOTIFY, TUNNEL, BROWSER_SYNC_PROXY_HOST} =
    process.env

/*
const middleware = proxy(['/lesson-7'], {
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/lesson-7': ''
    }
});
*/
export const server = () =>
    bs.init({
        files: ['src/assets/**/*'],
        open: !!yn(OPEN),
        reloadOnRestart: true,
        // proxy: BROWSER_SYNC_PROXY_HOST, // для работы из под OSPanel
        port: PORT || 3000,
        snippetOptions: {
            rule: {
                match: /<\/body>/i,
            },
        },
        /*
        // Пишем сюда название стартовой страницы по которой буде
        // http://localhost:3000/products
        // то есть по умолчанию удаляем это
        // index: 'site-8.html',
        server: {
            baseDir: ['src/assets'],
            directory: false,
            middleware:
                // prettier-ignore
                NODE_ENV !== 'production' ?
                    [
                        history({
                            // Пишем сюда название стартовой страницы по которой буде
                            // http://localhost:3000/products
                            // index: '/site-8.html',
                        }),
                        debuga(),
                    ] : [],
        },
        */
        server: {
            baseDir: 'src/assets/',
            directory: true,
            // prettier-ignore
            middleware: NODE_ENV !== 'production' ? [
                debuga({
                    dist: 'src/assets/'
                })
            ] : [],
        },
        tunnel: !!yn(TUNNEL),
        notify: !!yn(NOTIFY),
    })
