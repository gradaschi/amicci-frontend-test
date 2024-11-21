# Teste Prático para Frontend Developer

Este é um projeto desenvolvido como parte da disciplina de tópicos especiais em computação

## Descrição

A aplicação consiste na criação de uma SPA com as funções de: acessar latitude e longitude do usuário através da API do navegador, utilizando a API do Google Maps para obter a latitude e longitude a partir da busca da cidade, e por fim, o acesso dos dados momentâneos da região através da API da OpenWeather.

## Tecnologias Utilizadas

- React
- Typescript

## Pré-requisitos

- Javascript

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/gradaschi/amicci-frontend-test
cd amicci-frontend-test
```

2. Instale as dependências:

```bash
npm install
```

3. Adicione suas chaves de API GOOGLE_MAPS e OPENWEATHER no arquivo .env respectivamente:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=''
REACT_APP_OPENWEATHER_API_KEY=''
```

4. Inicie o serviço:

```bash
npm run start
```

## Telas da aplicação

### Busca de cidade - web

![alt text](/src/assets/img/web_1.png)

### Busca de cidade - mobile

![alt text](/src/assets/img/mobile_1.png)

### Retorno de cidade - web

![alt text](/src/assets/img/web_2.png)

### Retorno de cidade - mobile

![alt text](/src/assets/img/mobile_2.png)
