require('@babel/register')({
    'presets': [
        '@babel/preset-env',
        ["latest-node", { "target": "current" }]
    ]
})

require('@babel/polyfill')
require('./server')
