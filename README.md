# 初始代码

## 启动数据库

```

mkdir blog-data
docker run -v "blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

## 创建数据库

```
docker ps 
docker exec -it 容器id bash
psql -U blog
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```


## 清空之前的开发环境

```
docker kill 容器id
docker rm  容器id

rm -rf blog-data
或
docker container prune
docker volume rm blog-data
```

## 数据库

```
yarn m:run
node dist/seed.js
```

## psql 命令
```
// 查看表
\l

// 连接数据库
\c  blog_development;

// 查看数据库表
\dt

// 创建表
typeorm migration:create
```

typeorm 文档  https://typeorm.io/#/working-with-entity-manager
