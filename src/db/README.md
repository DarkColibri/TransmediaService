
Crea MODELO y MIGRACION:

sequelize model:create --name users --attributes name:string,password:string,email:string,role:integer
sequelize model:create --name roles --attributes name:string,description:string
sequelize model:create --name categories --attributes name:string,description:string
sequelize model:create --name associations --attributes name:string,description:string,link:string
sequelize model:create --name threads --attributes name:string,description:string,subject:string,categorie:integer,user:integer,replies:integer,visits:integer,views:integer
sequelize model:create --name posts --attributes content:string,thread:integer,user:integer,votesUp:integer,votesDown:integer,postRef:integer
sequelize model:create --name ssociationCategories --attributes categoryId:integer,associationId:integer


belongsToMany() el muchos a muchos, (n..n)
belongsTo() le pertenece un. (0..1)

## HACER CAMBIOS EN LA BASE DE DATOS:
sequelize db:migrate

sequelize db:seed:all


## DESHACE CAMBIOS EN LA BASE DE DATOS
sequelize db:migrate:undo



