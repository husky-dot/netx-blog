# 初始代码

## 启动数据库

```
docker run -v "blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

## 进入数据库

```
docker ps 

docker exec -it containerid

psql -U blog

// 查看表
\l

// 删除数据库存
drop database  blog_development;

// 创建数据库
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';

// 创建表
typeorm migration:create
```

typeorm 文档  https://typeorm.io/#/working-with-entity-manager
