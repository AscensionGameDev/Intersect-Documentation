# Autenticação


## Obter Token

Obtenha um token de autorização para solicitações de API que requerem autenticação.

### Request

**URL** : `/api/oauth/token`

**Método** : `POST`

**Autorização Necessária** : `No`

**Tipo de conteúdo** : `application/json`

**Corpo**

| Nome  | Tipo | Descrição | Requerido |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Auth Type. | :heavy_check_mark: |
| username | String  | Username of API Authorized Account | :heavy_check_mark: |
| password | String  | SHA256 Hash of Account Password | :heavy_check_mark: |

**Exemplo**

```json
{
	"grant_type": "password",
	"username": "jcsnider",
	"password": "5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
}
```

**Notas**

* O tipo de concessão para receber um token de autenticação é 'senha'.
* A senha deve ser um hash SHA256 da senha do usuário, com os hifens removidos.
* Você pode gerar um hash SHA256 de uma senha em texto simples [aqui](https://passwordsgenerator.net/sha256-hash-generator/).

---

### Resposta

**Condição** : If authentication was successful and token was generated.

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"access_token":  "4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87",

	"token_type":  "bearer",

	"expires_in":  299,

	"refresh_token":  "efd947fe-a874-4259-9b06-41a8a9505e35",

	".issued":  "Mon, 29 Jul 2019 19:52:04 GMT",

	".expires":  "Mon, 29 Jul 2019 19:57:04 GMT"
}
```


### Notas

* O refresh_token é o id do token, ele é usado para atualizar ou excluir o token usando as rotas abaixo.
* Para todas as solicitações que requerem autenticação, você precisará fornecer o token de acesso no header da solicitação. O formato adequado pode ser encontrado abaixo.

| Header | Tipo | Valor | 
| ----- | ---- |------------ |
| authorization | String  | Bearer [access_token] |


**Exemplo**

```
authorization: Bearer 4RoC_BqVns0p7guzWe-Ah4C6SiVmNcBO0KnFNLtGCxuPZbfF9QJnGc5zbrhM-EQ8c_fajWk076pyI-bjaUPsfyd_c2u5XLCANc4khfpTmq87ksvjDpMI87NVIWOCy1QAUTQoszf-CSkweyw-At31UjBUBTQ6iuidQcG-eZqdnecjKDWQ5vOBZpjI-Xlz7m8UZBjuEWf4sFIqbAnIQl54F8VSIr26QtcUROkUWepLFPqSa8ZO110vg5xefTy-wJmEwbn1zOAuSMR6yKah39GBU_xtkuHw1WaiJ_iSQLRiF7z-v0Ct1DYbMrmqaVdFI1xUwsrFN3WWgwpxxsXEBajcFkL9Ou7MSQBwWlI5sU4WlYJbKAGlaMJU9sohK5I3Q3B34UTub0xNdiyhqzn9E0HIep_RUzzE1YZhGmV3bBoV-cYTxSTfpTXIFuH9f8tbv-FPhylWY__hqndUKVpq4ez2n9HqfCdDi6HdYd1mcTyDTABdy248VeMPqiwKUl-95w87
```



## Atualizar token
Atualiza um token existente atrasando sua expiração.

### Solicitação

**URL** : `/api/oauth/token`

**Método** : `POST`

**Autorização Necessária** : `Yes`

**Tipo de conteúdo** : `application/json`

**Corpo**

| Nome  | Tipo | Descrição | Requerido |
| ----- | ---- |------------ | -------- |
| grant_type | String  | Auth Type. | :heavy_check_mark: |
| refresh_token | String  | Refresh Token Id | :heavy_check_mark: |

**Exemplo**

```json
{
	"grant_type": "refresh_token",
	"refresh_token": "efd947fe-a874-4259-9b06-41a8a9505e35",
}
```


**Notas**

* O tipo de concessão deve ser 'refresh_token'.

---

### Resposta

**Condição** : Token Refreshed

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"access_token": "3OSlfC8yg_fcSGdAGa9n63mDnvwfVhSOo1lgdj0-q4l2EsFvZ1nbZYVoqJd27TI4ksZALxJbzpwcvDHJwg8Frmvlvys-VHE0TLSNK-_o7YvgT2TA3BIASI2nQdA6dx_LIuB5LJhQpIWrlypCpEgP_FRtDfGevUEVpskTP7wB0VDw02RsVaNW19qKWMNwdqU07KxvtY-ghWquMVw1UQfR5LQTbt48b-e741CeFSa1zCD7Zt3UCjaG5NYt7YawOnS-qsA0dL3fCNhQbhjVVe2UZ613JledeiZowKmoIMPqxH9wuTbSvMOqx-YRH2GItVIzk5EfV-gnpZvFUlAtpZjmQqsxUlWX0CWpvpT6Vcr4NMnNCB8MhSuOjNBDQBkA5Z7QVxgEuywa3lyYDuWnD6OpystzuyTWnF3ETzgb8DfgmbGu_VxpdpBgufq9yeVE0KPh8XaIEVkICDIzJCArmPWgrgHr_AXnsl-OwBL-VoNgs7j6BlN_jHQ_Wd6A5LoJU_mv",
	"token_type": "bearer",
	"expires_in": 299,
	"refresh_token": "e27a8020-f9bb-419b-8a06-5421a1452a78",
	".issued": "Thu, 01 Aug 2019 19:44:09 GMT",
	".expires": "Thu, 01 Aug 2019 19:49:09 GMT"
}
```

## Apagar Token
Exclui o token associado a um determinado cabeçalho de autorização.

### Solicitação

**URL** : `/api/oauth/token/[username]`

**Método** : `DELETE`

**Autorização Necessária** : `Yes`

**Corpo** : `None`


**Notas**

* O tokenId no url da solicitação é retornado como 'refresh_token' nas respostas Obter Token e Atualizar Token.

---

### Resposta

**Condição** : Token Deleted

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"username": "jcsnider"
}
```


## Excluir token por id
Exclui um token de autorização evitando uso posterior.

### Solicitação

**URL** : `/api/oauth/token/[username]/[tokenId]`

**Método** : `DELETE`

**Autorização Necessária** : `No`

**Corpo** : `None`


**Notas**

* O tokenId no url da solicitação é retornado como 'refresh_token' nas respostas Obter Token e Atualizar Token.

---

### Resposta

**Condição** : Token Deleted

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"username": "jcsnider",
	"tokenId": "c7edff1c-ef0a-47e5-ba5f-a08b169c411e"
}
```
