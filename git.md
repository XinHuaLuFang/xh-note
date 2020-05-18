# Git

## config
1. local 仓库级别【优先级最高】
2. global 用户级别【优先级次之】
3. system 系统级别【优先级最低】
```ssh
# 查看配置
git config --local -l
# 修改配置文件
git config --local -e
# 修改配置项
git config --local user.name "yourname"
git config --local user.email "youremail@email.com"
```

## 分支

> 创建分支

```bash
  git branch <branchname>
```

> 切换分支

```bash
  git checkout <branchname>
```

> 创建新分支并立即切换

```bash
  git checkout -b <branchname>
```

> 删除分支

```bash
  git branch -d <branchname>
```
