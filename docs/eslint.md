### 增加eslint做代码规范

安装依赖

```
npm install eslint eslint-config-standard eslint-loader eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard -D
```
配置.eslintrc

```json
{
    "extends": "standard",
    "plugins": [
        "html"
    ],
    "parser": "babel-eslint"
}
```
配置package.json的脚本：

```json
"lint": "eslint --ext .js --ext .jsx --ext .vue client/",
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue client/",
"precommit": "npm run lint-fix"
```

执行命令

```
npm run lint
or
npm run lint-fix
```
