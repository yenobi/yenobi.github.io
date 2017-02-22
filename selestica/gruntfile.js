module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/src/**/*.js'],
        dest: 'js/build/build.js',
      },
    },

    watch: {
      scripts: {
        files: ['js/src/**/*.js'],
        tasks: ['concat']
      },
      css: {
        files: ['css/src/*.scss'],
        tasks: ['sass']
      }
    },

    uglify: {
      dist: {
        files: {
          'js/build/build.min.js': ['js/build/build.js']
        }
      }
    },

    sass: {
      dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/build/style.css': 'css/src/style.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['concat', 'uglify', 'sass']);

};
