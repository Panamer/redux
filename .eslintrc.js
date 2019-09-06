// airbib规则 校验代码逻辑 https://juejin.im/entry/5889757e128fe10068532c1c
// https://github.com/airbnb/javascript/tree/master/react

module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'node': true,
		'es6': true
	},
	'extends': [
    'airbnb',
    'plugin:prettier/recommended'
  ],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
  'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
    'react',
		'prettier'
	],
	'rules': {
		'prettier/prettier': 'error',
    // 关闭react默认的props-type验证
    'react/prop-types': [0],
    //关闭使用解构赋值的检测
    'react/destructuring-assignment': [0, 'always'],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent": [ 2, "tab" ],
    "no-console": process.env.REACT_APP_ENV === 'development' ? "off" : "warn",
    "react/button-has-type": [0, 'always']
	}
};
