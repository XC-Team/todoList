### 单元测试(Unit Test)

>用来对一个模块、一个函数或者一个类进行正确性检验的测试工作。

测试驱动开发: TDD-> Test-Driven Dovelopment

#### Karma（在node跑的测试框架）+Mocha

>Mocha（测试框架） 不带断言库+Chai断言库

Mocha/Karma + Vue-Test-Utils + Chai

1. 安装Karma-chrome-launch

```
npm install karma-chrome-launcher --save-dev
```

然后在项目中找到test/unit/karma.conf.js文件, 将PhantomJS浏览器修改为Chrome不要问我为什么不使用PhantomJS, 因为经常莫名的错误, 改成Chrome就不会!!!)

```js
//karma.conf.js

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    ...
  })
}
```
