module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    //   pkg: grunt.file.readJSON('package.json'),

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: {
          'js/script.min.js': ['js/script.js']
        },
      },
    },

    jshint: {
      options: {
        esversion: 6,
        ignores: ['js/*.min.js'],
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
    csslint: {
      // strict: {
      //   options: {
      //     import: 2
      //   },
      //   src: ['css/*.css', '!*.min.css']
      // },
      lax: {
        options: {
          import: false,
          'order-alphabetical': false,
          'universal-selector': false,
          'box-sizing': false,
        },
        src: ['css/*.css', '!css/*.min.css']
      }
    },
    watch: {
      all: {
        files: ['js/*.js', 'sass/*.scss', 'css/style.css', 'index.html'],
        tasks: ['uglify', 'cssmin', 'imagemin', 'htmlmin', 'jshint', 'sass', 'csslint'],
        options: {
          spawn: false,
        }
      }
    },
    cssmin: {
      // options: {
      //   mergeIntoShorthands: false,
      //   roundingPrecision: -1
      // },
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/min'
        }]
      }
    },
    htmlmin: {                                     // Task
      dev: {                                       // Another target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.min.html': 'index.html',
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('ugly', ['uglify', 'cssmin', 'imagemin', 'htmlmin', 'jshint', 'sass', 'csslint']);
  grunt.registerTask('default', ['watch']);
};