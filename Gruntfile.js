module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    //   pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        esversion: 6,
      },
      all: ['Gruntfile.js', 'js/*.js']
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/style.css': 'sass/style.scss'       // 'destination': 'source'
        }
      }
    },
    validation: {
      options: {
        generateReport: false,
        reportpath: false,
      },
      files: {
        src: ['index.html'],
      },
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['css/*.css']
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js', 'sass/*.scss', 'index.html'],
        tasks: ['jshint', 'sass', 'validation', 'csslint'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass', 'validation', 'csslint']);

};