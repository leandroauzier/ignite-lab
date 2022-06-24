# Projeto: Plataforma de evento como o IgniteLab

### Materiais:
- Figma: https://www.figma.com/file/Llod05Tv5EFWJ8K4KagZsO/Plataforma-de-evento---Ignite-Lab-(Community)
### Tecnologias usadas:
- React
- GraphQL
- Apollo (client pra GraphQL)
- GraphCMS

### Escopo: cadastro na plataforma com acesso a conteudo

## Sumário:
- 1 - Começando o projeto:
- 2 - Começando o projeto:
- 3 - Começando o projeto:
- 4 - Começando o projeto:
- 5 - Começando o projeto:

## 1 - Começando o projeto:
Primeiro, instalar a versão mais recente do NODEJS LTS no site: https://nodejs.org/en/download/

### Para verificar e ver a versão do Node instalado, no terminal escrever:
```
node -v
```

### Criando um projeto em Vite com a ultima versão:
```
npm create vite@latest
```
### Instalar todas as dependências:
```
npm install
```
É preciso selecionar react-ts para criar o projeto, ir até a pasta criada do projeto e em seguida rodar o servidor.
### Iniciar o servidor React:
```
npm run dev
```
### Instalando Tailwindcss, postcss e atoprefixer:
```
npm i tailwindcss postcss autoprefixer -D
```
### Criar o arquivo do tailwind com a configuração do postcss:
```
npx tailwindcss init -p
```

No arquivo **tailwind.config.js** na seção **Content**, é preciso passar os arquivos pro tailwind e dentro dos colchetes botar:
```tsx
'./src/**/*.tsx'
```
O que isso significa dizer que:
- ./src  -> na pasta source
- /**  ->  em qualquer pasta
- /*.tsx  ->  Arquivos que terminarem com TSX


Feito isso, remover de dentro da pasta src, os arquivos .css e .svg que não utilizaremos, e dentro do arquivo **App.tsx**, remover tudo dentro de return e emcima remover também o count assim como os imports.

No arquivo **Main.tsx**, remover nos imports o arquivo .css, e na pasta **src**, criar uma outra pasta chamada styles com o arquivo **global.css** dentro.

No arquivo **global.css**, inserir as seguintes linhas:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
inserir no arquivo **main.css**:
```tsx
import './style/global.css'
```

No arquivo **main.css**, as tags podem possuir um className, que é uma classe estilizada.

### Instalar o apollo e o graphql:
```
npm i @apollo/client graphql
```


