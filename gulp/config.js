var dest = './dist';
var src = './src';
var webpack = require('webpack');
var path = require('path');
var pwd = process.cwd();
var packageJson = require(path.join(pwd, 'package.json'));

module.exports = {
    copy: {
        images:{
            src:src + '/styles/images/*',
            dest: dest + '/styles/images'
        },
        componentsPic:{
            src:  src + '/components/*/styles/images/*',
            dest: dest + '/styles/images'
        },
        html:{
            src: src + '/index.html',
            dest: dest
        },
        libs:{
            src: src + '/extlib/*',
            dest:dest + '/extlib',
        }
    },
    webpack: {
        entry: {
            'ReactBasic': src + '/main.jsx'
        },
        output: {
            path: dest,
            filename: '[name].js',
            library: 'ReactBasic',
            libraryTarget: 'umd'
        },
        module: {
            loaders: [
                {   test: /\.jsx?$/,
                    exclude: [/node_modules/],
                    loader: 'babel-loader'//?presets[]=es2015&presets[]=react
                },
                {   test: /\.scss$/,
                    loader: 'style!css!sass'
                },
                {   test:/\.(png|jpg)$/,
                    loader:'url-loader?limit=8192'
                }]
        },
        resolve: {
            root: pwd,
            extensions: ['', '.js', '.jsx']
        },
        externals: {react: "React"}
    },
    sass: {
        src: src + '/styles/**/*.{sass,scss,css}',
        dest: dest + '/styles',
        settings: {
            indentedSyntax: false, // Enable .sass syntax?
            imagePath: '/images' // Used by the image-url helper
        }
    },
    watch: {
        src: 'src/**/*.*',
        tasks: ['build']
    },
    server: {
        settings: {
            root: dest,
            host: 'localhost',
            port: 8082,
            livereload: {
                port: 35931
            }
        }
    }
};
