module.exports = function( grunt ) {

  grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'server/public/scripts/script.min.js': [ 'client/scripts/script.js'],
              'server/public/scripts/heroService.min.js': [ 'client/scripts/heroService.js']
          }
        }
      },
    watch: {
      files: ['client/scripts/*.js', 'server/public/views/*.html', 'server/public/styles/*.css'],
      tasks: ['uglify']
    },
    copy: {
      main: {
        files:[
          {expand: true, cwd: 'node_modules', src: ['bootstrap/**', 'angular/**'], dest: 'server/public/vendors'}
        ]
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default', ['copy', 'watch']);
};
