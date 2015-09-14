/**
 * SunEee
 * @date Created on 2015/4/21
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';

/**
 * 使用hook('amd')使isMod生效
 */
fis.hook('amd')
	//匹配规则
	//项目中按实际情况配置
	.match('components.html', {
		//parser
		parser: 'ractive',
		//更改后缀为js
		rExt: '.js',
		//标记为模块
		isMod: true
	})
