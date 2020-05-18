## process

* `process.argv` 返回数组[process.execPath, jsFilePath, ...]

* `process.cwd()` 返回nodejs进程当前工作的目录


### 静态资源服务器
```shell script
npm install -g serve
# -s 参数的意思是将其架设在 Single-Page Application 模式下
# 这个模式会处理 SPA 在 HTML5 History 模式下的问题
serve -s dist
```
