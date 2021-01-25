#

## application cache

> 描述文件 `manifest file`，MIME类型必须是 `text/cache-manifest`，扩展名以前推荐用 `manifest`，现在推荐的是 `appcache`，只有当描述文件发生变化时，浏览器才会去更新应用缓存，最佳实践是修改版本号。
```
CACHE MANIFEST
# V1 - yyyy-MM-dd
# comment

file.css

```

> 关联描述文件与页面
```html
<html manifest="/offline.manifest"></html>
```
