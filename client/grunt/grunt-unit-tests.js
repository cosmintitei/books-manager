module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data;

    config.karma = {
        options: {
            frameworks: ['jasmine'],
            browsers: ['PhantomJS'],
            browserNoActivityTimeout: 60000,
            hostname: 'localhost',
            files: [
                '<%= path.vendor.root %>/angular/angular.js',
                '<%= path.vendor.root %>/angular-*/angular-*.js',

                '<%= path.src.scripts.root %>/app-boot.js',
                '<%= path.src.scripts.root %>/**/*.js',

                // templates
                '<%= path.temp.core.source.scripts %>/templates.js',

                // tests
                '<%= path.tests.unit %>/**/*.js'

            ],
            exclude: [
                '<%= path.vendor.root %>/angular-*/angular-*.min.js'
            ],
            preprocessors: {
                '<%= path.src.scripts.root %>/**/*.js': 'coverage'
            }
        },
        test: {
            reporters: ['dots', 'coverage'],
            mochaReporter: {
                output: 'autowatch'
            },
            coverageReporter: {
                dir: '<%= path.reports.coverage %>',
                reporters: [
                    {type: 'html'}, // HTML format readable by humans
                    {type: 'text-summary'}
                ]
            },
            singleRun: false
        },
        ci: {
            reporters: ['dots', 'coverage'],
            coverageReporter: {
                type: 'cobertura', // cobertura XML file format
                dir: '<%= path.reports.coverage %>'
            },
            singleRun: true
        },
        debug: {
            browsers: ['Chrome'],
            autoWatch: true,
            singleRun: false
        }
    };

    grunt.registerTask('test', [
        'ngtemplates:build',
        'karma:test'
    ]);
};
