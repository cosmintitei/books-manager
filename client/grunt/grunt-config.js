module.exports = function (grunt) {
    'use strict';

    function assetsFactory(prefix) {
        return {
            root: prefix + 'assets',
            images: prefix + '<%= path.assets.root %>/images',
            sprites: prefix + '<%= path.assets.root %>/sprites',
            styles: prefix + '<%= path.assets.root %>/styles',
            translations: prefix + '<%= path.assets.root %>/translations'
        };
    }

    function sourceFactory(prefix) {
        return {
            root: prefix + 'source',
            assets: assetsFactory(prefix + '<%= path.source.root %>/'),
            scripts: prefix + '<%= path.source.root %>/scripts',
            views: prefix + '<%= path.source.root %>/views'
        };
    }

    grunt.config.data.app = {
        bundleName: 'books-manager',
        moduleName: 'booksManager'
    };

    grunt.config.data.path = {
        assets: assetsFactory(''),
        source: sourceFactory(''),
        config: {
            root: 'config'
        },
        grunt: {
            root: 'grunt'
        },
        reports: {
            root: 'reports',
            coverage: '<%= path.reports.root %>/coverage',
            jslint: '<%= path.reports.root %>/jslint'
        },
        root: '',
        src: {
            root: 'src',
            assets: {
                root: '<%= path.src.root %>/assets',
                images: '<%= path.src.assets.root %>/images',
                sprites: '<%= path.src.assets.root %>/sprites',
                styles: '<%= path.src.assets.root %>/styles',
                translations: '<%= path.src.assets.root %>/translations'
            },
            scripts: {
                root: '<%= path.src.root%>/scripts',
                controllers: '<%= path.src.scripts.root %>/controllers',
                directives: '<%= path.src.scripts.root %>/directives',
                providers: '<%= path.src.scripts.root %>/providers'
            },
            views: '<%= path.src.root %>/views'
        },
        temp: {
            root: 'temp',
            core: {
                root: '<%= path.temp.root %>/core',
                source: sourceFactory('<%= path.temp.core.root %>/')
            },
            images: '<%= path.temp.root %>/images',
            sandbox: '<%= path.temp.root %>/sandbox',
            scripts: '<%= path.temp.root %>/scripts',
            sprites: '<%= path.temp.root %>/sprites',
            styles: '<%= path.temp.root %>/styles'
        },
        tests: {
            root: 'tests',
            unit: '<%= path.tests.root %>/unit'
        },
        vendor: {
            root: 'vendor'
        }
    };
};
