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
		'prettier/prettier': 'error'
	}
};
