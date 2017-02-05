'use strict';

module.exports = function( grunt ) {

  // tasks
  grunt.initConfig({

    // concat JS
    concat: {
      options: {
        separator: ';\n\n',
        sourceMap: true
      },
      scripts: {
        src: ['assets/js/src/*.js'],
        dest: 'assets/js/script.js'
      }
    },

    // beautify deploy JS
    jsbeautifier: {
      files: ['assets/js/script.js'],
      options: {
        config: 'jsbeautifier.json'
      }
    },

    // minify deploy JS
    uglify: {
      script: {
        files: {
          'assets/js/script.min.js': 'assets/js/script.js'
        }
      }
    },

    // compile Sass
    sass: {
      options: {                       
        style: 'expanded',
        sourceMap: true
      },                           
      dist: {
        files: {
          'assets/css/style.css': 'assets/css/src/main.scss'
        }
      }
    },

    // autoprefix CSS
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'Android 3', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
        sourceMap: false
      },
      no_dest: {
        src: ['assets/css/style.css']
      }
    },

    // beautify CSS
    csscomb: {
      styles: {
        options: {
          config: 'csscomb.json',
          sourceMap: false
        },
        files: {
          'assets/css/style.css': 'assets/css/style.css'
        }
      }
    },

    // minify CSS
    cssmin: {
      options: {
        keepSpecialComments: 0,
        sourceMap: false
      },
      styles: {
        files: {
          'assets/css/style.min.css': 'assets/css/style.css'
        }
      }
    },

    // watches files for changes
    watch: {
      js: {
        files: ['assets/js/src/*.js'],
        tasks: ['concat']
      },
      css: {
        files: ['css/src/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }

  });

  // Загрузка плагинов, установленных с помощью npm install
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-sass' );
  grunt.loadNpmTasks( 'grunt-csscomb' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-contrib-concat');
  grunt.loadNpmTasks( 'grunt-jsbeautifier' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );

  // some default tasks
  grunt.registerTask( 'default', [ 'concat', 'sass', 'autoprefixer' ] );
  grunt.registerTask( 'publish', [ 'concat', 'uglify', 'sass', 'autoprefixer', 'csscomb', 'cssmin' ] );
  grunt.registerTask( 'watch', [ 'watch' ] );

};