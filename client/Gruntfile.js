module.exports = function (grunt) {
    'use strict';

    // time Grunt tasks
    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        ngtemplates: 'grunt-angular-templates',
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({});

    // load tasks and configurations
    grunt.file.recurse('grunt', function (gruntfile) {
        require('./' + gruntfile)(grunt);
    });

    // Empty default alias task (does nothing)
    grunt.registerTask('default', []);
};
