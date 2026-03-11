module.exports = function(grunt) {
    var path = require('path');
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'grunt'),
        jitGrunt: {
            staticMappings: {
                scsslint: 'grunt-scss-lint'
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['eslint', 'jest', 'scsslint', 'svgstore'])
}
