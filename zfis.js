/**
 *
 * @authors zjj (zhongjingjing@gmail.com    )
 * @date    2014-10-22 23:55:20
 * @version 0.0.1
 */
var fis = module.exports = require('fis');

fis.cli.name = 'zfis';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');


fis.config.merge({
	statics: '/static',
	modules: {
		parser: {
			less: 'less',
			tpl: 'tmodjs'
		},
		postprocessor: {
			js: "jswrapper, require-async",
			html: "require-async"
		},
		optimizer: {
			tpl: 'html-compress'
		},
		postpackager: ['autoload', 'simple'],
		lint: {
			js: 'jshint',
			css: 'csslint',
			less: 'csslint'
		}
	},
	roadmap: {
		ext: {
			less: 'css'
		},
		path: [{
			reg: /^\/tpl\/(.*)$/i,
			useCache: false,
			release: '$1'
		}, {
			reg: /^\/bower_components\/(.*)$/i,
			release: '$1'
		}, {
			reg: /^\/node_modules\/(.*)$/i,
			release: '$1'
		}, {
			//less文件无需发布
			reg: /^(.*)\.less$/i,
			release: false
		}, {
			//其他css文件
			reg: /^(.*)\.css$/i,
			release: '${statics}/$&'
		}, {
			reg: /.*\.(html|jsp|tpl|vm|htm|asp|aspx)/,
			useCache: false,
			release: '$&'
		}, {
			reg: "README.md",
			release: false
		}, {
			reg: "**",
			release: '${namespace}/$&'
		}]
	},
	settings: {
		parser: {
			tmodjs: {
				escape: true,
				compress: true,
				type: "default",
				runtime: "template.js"
			}
		}
		postprocessor: {
			jswrapper: {
				type: 'amd'
			}
		},
		lint: {
			jshint: {
				camelcase: true,
				curly: true,
				eqeqeq: true,
				forin: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				noempty: true,
				node: true
			},
			csslint: {
				ie: false
			}
		}
	}
});