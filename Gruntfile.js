module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
      build: {
        NODE_ENV: 'production'
      }
    },

    browserify: {
      dev: {
        options: {
          debug: true,
          transform: [
            ["reactify", {"es6": true}]
          ]
        },
        files: {
          'assets/build/build.js': 'assets/js/*.jsx'
        }
      },
      build: {
        options: {
          debug: false,
          transform: [
            ["reactify", {"es6": true}]
          ]
        },
        files: {
          'assets/build/build.js': 'assets/js/*.jsx'
        }
      }
    },

    less: {
      dev: {
        options: {
          paths: 'assets/css/less',
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
          ]
        },
        files: {
          'assets/css/style.css' : 'assets/css/less/style.less'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/build',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      browserify: {
        files: [
          'assets/js/*.js',
          'assets/js/*.jsx',
          'assets/css/**/*.css',
          'assets/css/*.css',
          'assets/css/less/*.less'
        ],
        tasks: ['less', 'cssmin', 'browserify:dev']
      },
      options: {
        nospawn: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['env:build', 'cssmin', 'browserify:build']);
};