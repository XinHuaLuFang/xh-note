1. 安装`n`
```
curl -L https://git.io/n-install | bash
```
> n-install sets both PREFIX and N_PREFIX to $HOME/n, installs n to $HOME/n/bin, modifies the initialization files of supported shells to export N_PREFIX and add $HOME/n/bin to the PATH, and installs the latest LTS node version. As a result, both n itself and all node versions it manages are hosted inside a single, optionally configurable directory, which you can later remove with the included n-uninstall script. n-update updates n itself to the latest version.

2. 安装`pm2`
```
npm install pm2 -g
```

3. `yum`安装`nginx`
    * `/etc/yum.repos.d/nginx.repo` 中设置源，其中`$releasever`可手动修改为版本号`7`，然后执行`yum install nginx -y`
    ```
    [nginx-stable]
    name=nginx stable repo
    baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
    gpgcheck=1
    enabled=1
    gpgkey=https://nginx.org/keys/nginx_signing.key
    module_hotfixes=true
    
    [nginx-mainline]
    name=nginx mainline repo
    baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
    gpgcheck=1
    enabled=0
    gpgkey=https://nginx.org/keys/nginx_signing.key
    module_hotfixes=true
    ```
   * 禁止`yum`自动更新`nginx`，在`/etc/yum.conf`中
   ```
   exclude=nginx
   ```
