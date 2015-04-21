'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		clean: {
			js: ['_dist/*', 'build/*']
		},
		copy: {
			bower: {
				src: 'src/ng-elastic-escape.js',
				dest: '_dist/ng-elastic-escape.js',
				options: {
					process: function (content) {
						content = "(function () { 'use strict'; " + content + "}());";
   return content;
					}
				}
			},
			npm: {
				src: 'src/ng-elastic-escape.js',
				dest: 'build/ng-elastic-escape.js',
				options: {
					process: function (content) {
						content = "(function () { 'use strict'; var angular = require('angular'); var _ = require('lodash'); module.exports = " +
					 content + "}());";
	    return content;
					}
				}
			}
		},
		uglify: {
			bower: {
   			options: {
  				mangle: true,
	  			sourceMap: true,
		  		quoteStyle: 0,
			  	mangleProperties: true,
				  screwIE8: true,
				  preserveComments: false,
				  maxLineLen: 32000,
				  wrap: true,
				  sourceMapName: '_dist/ng-elastic-escape.map'
			  },
			  files: {
				  '_dist/ng-elastic-escape.min.js': ['_dist/ng-elastic-escape.js']
			  }
			},
			npm: {
				options: {
					mangle: true,
					sourceMap: true,
					quoteStyle: 0,
					mangleProperties: true,
					screwIE8: true,
					preserveComments: false,
					maxLineLen: 32000,
					wrap: true,
					sourceMapName: 'build/ng-elastic-escap.map'
				},
				files: {
					'build/ng-elastic-escape.min.js': ['build/ng-elastic-escape.js']
				}
			}
		}
	});

  grunt.registerTask('buildNpm', ['copy:npm', 'uglify:npm']);
  grunt.registerTask('buildBower', ['copy:bower', 'uglify:bower']);
	grunt.registerTask('build', ['clean', 'buildNpm', 'buildBower']);
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
}