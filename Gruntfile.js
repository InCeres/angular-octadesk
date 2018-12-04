module.exports = function (grunt) {
  var format = function(str, data) {
    return str.replace(/{([^{}]+)}/g, function(match, val) {
      var prop = data;
      val.split('.').forEach(function(key) {
        prop = prop[key];
      });

      return prop;
    });
  };

  String.prototype.format = function(data) {
    return format(this, data);
  };

  var srcFolder         = 'src';
  var distFolder         = 'dist';
  var distFile         = '{0}/angular-octadesk.js'.format([distFolder]);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {},
      dist: {
        src: [
          "{0}/**/*.js".format([srcFolder])
        ],
        dest: distFile
      }
    },

    uglify: {
      options: {},
      dist: {
        files: {
          'dist/angular-octadesk.min.js': [distFile]
        }
      }
    },

    clean: {
      dist: {
        src: ['{0}/**/*.*'.format([distFolder])]
      }
    },

    watch: {
      options: {
      },
      src: {
        files: [
          "{0}/**/*.js".format([srcFolder])
        ],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'concat', 'uglify']);
};
