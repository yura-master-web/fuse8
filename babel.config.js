let settings = {}
if (process.env.LAOUTS) {
    settings = {
        ignore: ['node_modules/**/*'],
        presets: [['@babel/preset-env']],
    }
} else {
    settings = {presets: ['@vue/cli-plugin-babel/preset']}
}

module.exports = settings
