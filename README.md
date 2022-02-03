<h1 align="center"> Crud Usuarios </h1>

<p align="center">
  API para castastro de usuarios utilizando Node.js e Banco de Dados MongoDB
</p>

## Tecnologias

 * Node.Js v12.22.9
 * Express
 * Banco de dados MongoDB
 
## Features
 * Adicionar um usuario
 * Listar usuarios
 * Buscar por ID
 * Remover usuarios
 
 ## Como utilizar


### Cadastrando usuarios na base de dados via API

**POST** `localhost:3003/usuario`

```json
// request
{
	"nome": "Junior",
	"senha": "123"
}
```
```json
// response
{
	"nome": "Junior",
	"senha": "123",
	"_id": "61fc36313a5f45c047ee4a60",
	"__v": 0
}
```

### Listando usuarios na base de dados via API

**GET** `localhost:3003/usuario`

```json
// response
[
	{
		"_id": "61f1cd62d3160d8534a93ac7",
		"nome": "Wollas Romeiro",
		"senha": "123456",
		"__v": 0
	},
	{
		"_id": "61fc0ff7e9adf0f570840444",
		"nome": "Ruan",
		"senha": "123",
		"__v": 0
	}
]
```
### Buscando usuarios na base de dados via API

**GET** `localhost:3003/usuario/`**[ID]** </br>
`localhost:3003/usuario/61f1cd62d3160d8534a93ac7`
```json
// response 
{
	"_id": "61f1cd62d3160d8534a93ac7",
	"nome": "Wollas Romeiro",
	"senha": "123456",
	"__v": 0
},
```

### Excluindo usuarios na base de dados via API

**DELETE** `localhost:3003/usuario/delete`**[ID]** </br>
`localhost:3003/usuario/delete/61f1cd62d3160d8534a93ac7`
```json
// response 
{
	"_id": "61f1cd62d3160d8534a93ac7",
	"nome": "Wollas Romeiro",
	"senha": "123456",
	"__v": 0
},
```
