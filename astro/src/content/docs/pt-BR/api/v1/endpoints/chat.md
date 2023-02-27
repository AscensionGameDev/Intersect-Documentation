---
title: Chat
---



## Mensagem Global

Envia uma mensagem de bate-papo para todos os que estão conectados no jogo.

### Solicitação

**URL** : `/api/v1/chat/global`

**Método** : `POST`

**Autorização Necessária** : `Yes`

**Tipo de conteúdo** : `application/json`

**Corpo**

| Nome  | Tipo | Descrição | Requerido |
| ----- | ---- |------------ | -------- |
| Message | String  | A mensagem de bate-papo a ser enviada. | :heavy_check_mark: |
| Color | Object  | Objeto Json com valores RGBA da mensagem de bate-papo. | :heavy_minus_sign: |
| Target | String  | Nome do jogador associado à mensagem, se houver. | :heavy_minus_sign: |

**Exemplo**

```json
{
	"Message": "Hello World!",
	"Color":{
		"A": 255,
		"R": 255,
		"G": 255,
		"B": 255
	},
	"Target": ""
}
```


**Notas**

* O destino é usado para adicionar amigos rapidamente ou emitir ações administrativas. Por exemplo, se o painel de administração estiver aberto e uma mensagem de bate-papo for clicada, o destino (se fornecido) será preenchido automaticamente na caixa de destino do painel de administração para banir, silenciar, teleportar rapidamente, etc. Na maioria dos casos, o destino deve ser omitido ou deixado como nulo.

---

### Resposta

**Condition** : A mensagem foi enviada com sucesso.

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"success": true,
	"chatMessage":{
		"Message": "Hello World!",
		"Color":{
			"A": 255,
			"R": 255,
			"G": 255,
			"B": 255
		},
		"Target": ""
	}
}
```


## Mensagem de proximidade

Envia uma mensagem de bate-papo para todos nas proximidades de um determinado mapa.

### Solicitação

**URL** : `/api/v1/chat/proximity/[mapId]`

**Método** : `POST`

**Autorização Necessária** : `Yes`

**Tipo de conteúdo** : `application/json`

**Corpo**

| Nome  | Tipo | Descrição | Requerido |
| ----- | ---- |------------ | -------- |
| Message | String  | A mensagem de bate-papo a ser enviada. | :heavy_check_mark: |
| Color | Object  | Objeto Json com valores RGBA da mensagem de bate-papo. | :heavy_minus_sign: |
| Target | String  | Nome do jogador associado à mensagem, se houver. | :heavy_minus_sign: |

**Exemplo**

```json
{
	"Message": "Hello World!",
	"Color":{
		"A": 255,
		"R": 255,
		"G": 255,
		"B": 255
	},
	"Target": ""
}
```


**Notas**
* O destino é usado para adicionar amigos rapidamente ou emitir ações administrativas. Por exemplo, se o painel de administração estiver aberto e uma mensagem de bate-papo for clicada, o destino (se fornecido) será preenchido automaticamente na caixa de destino do painel de administração para banir, silenciar, teleportar rapidamente, etc. Na maioria dos casos, o destino deve ser omitido ou deixado como nulo.

---

### Resposta

**Condition** : A mensagem foi enviada com sucesso.

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"success": true,
	"mapId": "8102053e-28f9-4452-91d4-ee2a3ffb84cf",
	"chatMessage":{
		"Message": "Hello World!",
		"Color":{
			"A": 255,
			"R": 255,
			"G": 255,
			"B": 255
		},
		"Target": ""
	}
}
```


## Mensagem direta

Envia uma mensagem de bate-papo para um jogador específico.

### Solicitação

**URL** : `/api/v1/chat/direct/[lookupkey]`

**Lookup Key** : `Username or character name`

**Método** : `POST`

**Autorização Necessária** : `Yes`

**Tipo de conteúdo** : `application/json`

**Corpo**

| Nome  | Tipo | Descrição | Requerido |
| ----- | ---- |------------ | -------- |
| Message | String  | A mensagem de bate-papo a ser enviada. | :heavy_check_mark: |
| Color | Object  | Objeto Json com valores RGBA da mensagem de bate-papo. | :heavy_minus_sign: |
| Target | String  | Nome do jogador associado à mensagem, se houver. | :heavy_minus_sign: |

**Exemplo**

```json
{
	"Message": "Hello World!",
	"Color":{
		"A": 255,
		"R": 255,
		"G": 255,
		"B": 255
	},
	"Target": ""
}
```


**Notas**
* O destino é usado para adicionar amigos rapidamente ou emitir ações administrativas. Por exemplo, se o painel de administração estiver aberto e uma mensagem de bate-papo for clicada, o destino (se fornecido) será preenchido automaticamente na caixa de destino do painel de administração para banir, silenciar, teleportar rapidamente, etc. Na maioria dos casos, o destino deve ser omitido ou deixado como nulo.

---

### Resposta

**Condição** : A mensagem foi enviada com sucesso.

**Código** : `200 SUCCESS`

**Exemplo**

```json
{
	"success": true,
	"lookupKey": "jcsnider",
	"chatMessage":{
		"Message": "Hello World!",
		"Color":{
			"A": 255,
			"R": 255,
			"G": 255,
			"B": 255
		},
		"Target": ""
	}
}
```
