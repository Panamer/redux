module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'es6': true
	},
	'extends': ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
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
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
