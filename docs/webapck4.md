### 升级成webapck4

1.webpack相关的插件就是带有webpack的，以及loader插件（边升级报错，边修改）;

2.有些API的修改或者废弃，需要修改配置

新增:

1、mode属性，在config中一定要写`mode: process.env.NODE_ENV || 'production'`
2、optimization属性

```js
optimization: {
  splitChunks: {
      chunks: 'all'
  },
  runtimeChunk: true
}
```

废弃：
- 1、webpack.NoEmitOnErrorsPlugin()
- 2、webpack.optimize.CommonsChunkPlugin()


升级成webpack4过程遇到的坑

1.`npm run dev`后出现`Path variable [contentHash] not implemented in this context: styles.[contentHash].css`

解决方案：把[contentHash]换成 [chunkhash:8]

2.extract-text-webpack-plugin升级中警告它需要依赖webpack3，故决定试试@next，结果可以，
`npm install extract-text-webpack-plugin@next`,以后试试@next