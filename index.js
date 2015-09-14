/**
 * SunEee
 * @date Created on 2015/4/21
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

var rcu = require('rcu');
var builders = require('rcu-builders');
var Ractive = require('ractive');

// Initialise ractive component utils
rcu.init(Ractive);

module.exports = function createModule(content, file, conf) {


	var definition = rcu.parse(content);

	console.log(conf);


	var cjsModule = builders.cjs(definition);


	return cjsModule

};
