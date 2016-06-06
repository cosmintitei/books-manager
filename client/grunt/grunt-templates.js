module.exports = function (grunt) {
    'use strict';
    var config = grunt.config.data;

    config.ngtemplates = {
        options: {
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true
            },
            url: function changeURL(url) {
                return grunt.template.process('TEMPLATE.<%=app.moduleName%>.' + url);
            }
        },
        build: {
            options: {
                module: '<%= app.bundleName %>'
            },
            cwd: '<%= path.src.views %>',
            src: ['**/*.html'],
            dest: '<%= path.temp.core.source.scripts %>/templates.js'
        }
    };
};
