API REST (Restful)

http://localhost:300

/api/ -> rotas de API

http://localhost:300/api/hello
http://localhost:300/api/register



http://localhost:300/api/journalentry

- Operações CRUD
Create
Read
Update
Delete


Read
GET http://localhost:300/api/journalentry
- Ler todas journal entries do usuário

GET http://localhost:300/api/journalentry/$id

Create
POST http://localhost:300/api/journalentry

Update
POST/PUT http://localhost:300/api/journalentry/$id

Delete
DELETE http://localhost:300/api/journalentry/$id
