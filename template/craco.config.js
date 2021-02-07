const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    babel: {
        presets: [
            [
                "@babel/env",
                {
                    "targets": {
                        "node": "current"
                    }
                }
            ],
            "@babel/typescript",
            "@babel/react"
        ],
        plugins: [
            ["@babel/plugin-proposal-numeric-separator"],
            ["@babel/plugin-proposal-nullish-coalescing-operator"],
            ["@babel/plugin-proposal-optional-chaining"],
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["babel-plugin-parameter-decorator"],
            ["@babel/plugin-proposal-class-properties", { "loose": true}],
            ["babel-plugin-root-import", {
                "rootPathSuffix": "src/",
                "rootPathPrefix": "@/"
            }],
        ]
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss')('tailwind.config.js'),
                require('autoprefixer')
            ]
        }
    },
    webpack: {
        plugins: {
            add: [
                isDevelopment && new webpack.HotModuleReplacementPlugin(),
                isDevelopment && new ReactRefreshWebpackPlugin(),
            ].filter(Boolean)
        }
    }
}
