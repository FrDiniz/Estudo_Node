# Pontte

## Documentaçâo API

### Endpoint para criar um contrato

[POST] http://localhost:8080/contract

```json
{
  "nome": "Primeiro Contrato",
  "email": "contrato@hotmail.com",
  "CPF": "417.563.968-33",
  "emprestimo": 1000,
  "renda_mensal": 3000,
  "dt_nasc": "1997-09-24",
  "estado_civil": "solteiro",
  "endereco": "Rua das Orquideas, 56 - Jardim Mercedes - Jandira"
}
```

### Endpoint para listar os contratos

[GET] http://localhost:8080/contract

### Endpoint adicionar imagem a um contrato

[POST] http://localhost:8080/contract/image

```json
{
  "idContract": "5f7e41c1e133a249dc65b312",
  "docType": 2,
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhE... <base 64>"
}
```

### Endpoint aprovar um contrato

[POST] http://localhost:8080/contract/approve

```json
{
  "idContract": "5f7e40ede133a249dc65b30d"
}
```

### Endpoint reprovar um contrato

[POST] http://localhost:8080/contract/disapprove

```json
{
  "idContract": "5f7e40ede133a249dc65b30d"
}
```
