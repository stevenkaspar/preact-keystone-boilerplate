'use strict';
const gulp = require('gulp');
const watch = require('gulp-watch');
const shell = require('gulp-shell')
const sass = require('gulp-sass');
const spawn = require('child_process').spawn;


const paths = {
	src: ['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
	style: {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	},
	/**
	* paths to files that should restart app
	*/
	server_files: [
		'./models/**/*.js',
		'./routes/**/*.js',
		'keystone.js',
		'package.json'
	]

};

/**
* logic for starting and restarting server process
*/

let watchApp = (done) => {

	// node process
	var node_process;
	//
	const dest_path = `.`;

	let restartServer = () => {
	  node_process.kill();
	  node_process = startServer();
	}

	let startServer = () => {
	  var local_node_process = spawn('node', ['keystone'], {cwd: dest_path});
	  local_node_process.on('close', (code, signal) => {
	    console.log(`-- Server process closed --`);
	  });
	  local_node_process.stdout.on('data', (data) => {
	    console.log(`${data}`);
	  });
	  local_node_process.stderr.on('data', (data) => {
	    console.log(`Error: ${data}`);
	  });
	  return local_node_process;
	}

	const watcher = gulp.watch(paths.server_files);
	watcher.on('change', () => restartServer() )

	// start the server process
	node_process = startServer();

	done();
}
/** sass setup **/
gulp.task('watch-sass', () => {
	gulp.watch(paths.style.all, ['sass']);
});
gulp.task('sass', () => {
	gulp.src(paths.style.all)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});
/** app setup **/
gulp.task('watch-app', watchApp);
gulp.task('default', ['watch-app', 'watch-sass']);
