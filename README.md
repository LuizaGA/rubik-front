# rubik-front

Repositório criado para armazenar os códigos do projeto Rubik, proposto na cadeira de Desenvolvimento de Plataformas Web, pelo professor Rafael Garcia Barbosa.

## :man_technologist: Equipe de Desenvolvimento
* Bruno Pompeu Pequeno Neves - 2010386 / 8
* Camila Medeiros Rêgo - 2125522 / 0
* Luiza Gadelha Amorim - 2125980 / 2
* Thamires Stoppelli Ribeiro - 2128916 / 7

## :hammer_and_wrench: Instalação

Primeiro, clone o repositório do backend desse projeto, usando o comando:

```
git clone https://github.com/BrunoppNeves/rubik-back.git
```

Entrar na pasta backend utilizando o comando:

```
cd rubik-back
```

Instale as dependências com o comando:

```
npm i
```

Crie um arquivo ``.env`` e preencha conforme o arquivo exemplo ``.env.exemplo``. Em DATABASE_URL, digite a string de conexão com o banco de dados. Em SECRET, escolha uma palavra para encriptar o JWT.

Para rodar no seu localhost utilize no terminal:

```
npm run dev
```

O projeto do backend ficará disponível na porta ``http://localhost:5001``

Para instalar o frontend, clone o repositório do backend desse projeto, usando o comando:

```
https://github.com/LuizaGA/rubik-front.git
```

Entrar na pasta frontend utilizando o comando:

```
cd rubik-front
```

Instale as dependências com o comando:

```
npm i
```

Para rodar no seu localhost utilize no terminal:

```
npm start
```

O projeto do frontend ficará disponível na porta ``http://localhost:5173/``

