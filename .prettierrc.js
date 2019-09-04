// https://prettier.io/docs/en/options.html  api文档
// https://juejin.im/post/5b27a326e51d45588a7dac57
// 格式化代码样式

module.exports = {
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格	默认2
  useTabs: true, // 缩进用tab代替空格 默认false
  semi: false, // 行末加分号	默认true
  singleQuote: true, // 用单引号代替双引号	默认false
  jsxSingleQuote: false, // 在jsx中 用单引号代替双引号 默认false
  trailingComma: 'none', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxBracketSameLine: true, // 把jsx的 > 元素放在最后以后末尾，而不是独自在下一行 默认false
  arrowParens: 'avoid', // x => x 可以省略箭头函数的（） "<avoid|always>"
  parser: 'babel', // 指定解析器
  endOfLine: 'lf' // 使文件以一个空白行结尾 <auto|lf|crlf|cr>
};
