module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data;

    // inject bower dependencies into the index page
    config.wiredep = {
        index: {
            devDependencies: true,
            ignorePath: '../',
            src: '<%= path.temp.root %>/index.html'
        }
    };

    // inject local JS and CSS dependencies into the index page
    config.injector = {
        options: {
            relative: false,
            addRootSlash: false,
            ignorePath: [
                '<%= path.root %>',
                '<%= path.temp.root %>'
            ]
        },
        index: {
            files: {
                '<%= path.temp.root %>/index.html': [
                    '<%= path.src.scripts.root %>/app.js',
                    '<%= path.src.scripts.root %>/**/*.js',
                    '<%= path.temp.core.source.scripts %>/templates.js',

                    '<%= path.src.assets.styles %>/**/*.css',
                    '<%= path.temp.core.source.assets.styles %>/**/*.css'
                ]
            }
        }
    };

    config.connect = {
        options: {
            base: [
                '<%= path.temp.root %>',
                '<%= path.root %>'
            ],
            hostname: 'localhost',
            port: 9000,
            useAvailablePort: true,
            livereload: 35829,
            open: true
        },
        serve: {
        }
    };

    config.watch = {
        options: {
            livereload: '<%= connect.options.livereload %>',
            livereloadOnError: false,
            spawn: false
        },
        gruntfile: {
            options: {
                reload: true
            },
            files: [
                'Gruntfile.js',
                '<%= path.grunt.root %>/*.js'
            ]
        },
        index: {
            files: ['<%= path.root %>/index.html'],
            tasks: ['copy:index', 'injector:index', 'wiredep:index']
        },
        html: {
            files: [
                '<%= path.src.views %>/**/*.html'
            ],
            tasks: ['ngtemplates']
        },
        scripts: {
            options: {
                event: ['added', 'deleted']
            },
            files: [
                '<%= path.src.root %>/**/*.js'
            ],
            tasks: ['injector:index', 'wiredep:index']
        },
        livereload: {
            files: [
                '<%= path.temp.root %>/index.html',
                '<%= path.src.root %>/**/*.css',
                '<%= path.src.root %>/**/*.js',
                '<%= path.temp.core.source.assets %>/**/*.{gif,ico,jpg,png,svg}',
                '<%= path.temp.core.source.scripts %>/templates.js',
                '<%= path.temp.core.source.styles %>/*.css'
            ]
        }
    };

    // serve index page
    grunt.registerTask('serve', function () {
        grunt.task.run([
            'clean:temp',

            'ngtemplates',
            'copy:index',

            'injector:index',
            'wiredep:index',

            'connect',
            'watch'
        ]);
    });
};
