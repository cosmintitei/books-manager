module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data;
    var jsLintConfig = grunt.file.readJSON('config/jslint.json');

    config.jslint = {
        grunt: {
            src: [
                'Gruntfile.js',
                '<%= path.grunt.root %>/**/*.js'
            ],
            directives: jsLintConfig.grunt,
            options: {
                edition: 'latest',
                errorsOnly: false,
                failOnError: true,
                jslintXml: '<%= path.reports.jslint %>/grunt_jslint.xml',
                checkstyle: '<%= path.reports.jslint %>/grunt_checkstyle.xml'
            }
        },
        source: {
            src: [
                '<%= path.src.scripts.root %>/**/*.js'
            ],
            directives: jsLintConfig.source,
            options: {
                edition: 'latest',
                shebang: true,
                errorsOnly: false,
                failOnError: true,
                checkstyle: '<%= path.reports.jslint %>/source_checkstyle.xml',
                jslintXml: '<%= path.reports.jslint %>/source_jslint.xml',
                junit: '<%= path.reports.jslint %>/source_junit.xml',
                log: '<%= path.reports.jslint %>/source_lint.log'
            }
        },
        tests: {
            src: [
                '<%= path.tests.root %>/**/*.js'
            ],
            directives: jsLintConfig.tests,
            options: {
                edition: 'latest',
                shebang: true,
                errorsOnly: false,
                failOnError: true,
                checkstyle: '<%= path.reports.jslint %>/test_checkstyle.xml',
                jslintXml: '<%= path.reports.jslint %>/test_jslint.xml',
                junit: '<%= path.reports.jslint %>/test_junit.xml',
                log: '<%= path.reports.jslint %>/test_lint.log'
            }
        }
    };

    grunt.registerTask('check', [
        'newer:jslint',
        'karma:ci'
    ]);
};
