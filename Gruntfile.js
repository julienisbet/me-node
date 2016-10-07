module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
      		options: {
        		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      		},
      		build: {
        		src: 'src/js/app.js',
        		dest: 'public/js/app.min.js'
      		}
      	},
      	less: {
      		development: {
      			options: {
      				paths: ['public/css'],
      				plugins: [
      					(new (require('less-plugin-clean-css'))({}))
      				]
      			},
      			files: {
      				'public/css/app.min.css': 'src/less/app.less'
      			}
      		}
      	},
        watch: {
            files: ["src/less/app.less", "src/js/app.js"],
            tasks: ["less", "uglify"]
        }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
