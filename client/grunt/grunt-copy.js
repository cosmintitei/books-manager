module.exports = function (grunt) {
    'use strict';

    var config = grunt.config.data;

    config.copy = {
        index: {
            files: [{
                src: '<%= path.src.root %>/index.html',
                dest: '<%= path.temp.root %>/index.html'
            }, {
                expand: true,
                cwd: '<%= path.src.assets.images %>',
                src: '*.svg',
                dest: '<%= path.temp.core.source.assets.images %>'
            }]
        }
    };

    config.clean = {
        reports: [
            '<%= path.reports.root %>/**/*',
            '<%= path.reports.root %>'
        ],
        temp: [
            '<%= path.temp.root %>/**/*',
            '<%= path.temp.root %>'
        ]
    };
};
