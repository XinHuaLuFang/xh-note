## docker-nginx

```bash
docker run --name nginx-sentosa -p 8888:80 -v d:\docker\nginx:/usr/share/nginx/html nginx
```
* name: 自定义容器名称 nginx-sentosa
* -p: 指定端口映射，格式为 `主机(宿主)端口:容器端口`
* -v: 目录挂载，格式为 `主机目录:容器目录`

## docker-gitlab

- [Install](https://hub.docker.com/_/gitlab-community-edition)

## 安装vim
```bash
apt-get update
apt-get upgrade

apt-get install vim
```
