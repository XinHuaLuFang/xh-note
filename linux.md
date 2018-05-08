# Linux

## ls

> 仅列出目录，不列出文件

```bash
  ls /
```

> 不列出`.`和`..`目录

```bash
  ls -A
```

> 不列出`.`和`..`目录，且在目录名后加`/`，可执行文件名后加`*`

```bash
  ls -AF
```

> 给列出的文件前面加个id

```bash
  ls -A | cat -n
```

## mkdir

> 递归创建目录

```bash
  mkdir - p test1/test2/test3
```

> 创建目录时指定权限为`rwx--x--x`

```bash
  mkdir -m 711 testdir
```

## rmdir

> 删除空目录

```bash
  rmdir test
```

> 删除递归空目录

```bash
  rmdir -p test1/test2/test3
```
