# 👩🏻‍💻 Mini Tutorial de como instalar o Node.js e o AngularCLI

Descrições informais com o único intuito de ajudar o grupo a se orientar

#  1️⃣ Instalar o NodeJS - versão 22.16

- [Site para instalação](https://nodejs.org/en)

- Depois que baixar, executa e vai clicando em next

- Depois testa abrindo o terminal e digita : node --version

- Depois você também coloca : npm --version

🫧 Se rodar, deu tudo certo, e se não deu, reinicia o computador que provavelmente vai. 🫧

# 2️⃣ Instalar o AngularCLI

- Abre o terminal e digita :  ng version

Deu um erro louquíssimo né, calma que era só pra você ver que a máquina não reconhece porque o AngularCLI ainda não foi baixado de forma global

- Para baixar o AngularCLI vai dnv no terminal e digita : npm install -g @angular/cli@19
- Depois testa novamente digitando : ng version e vai mostrar ele instalado.

# 2️⃣ Criando um programa Angular

- Abre o terminal e digita: ng new nome_arquivo (exemplo: ng new protege-agro)
- Ele vai perguntar qual versão de alguma coisa você quer, dai vc dá enter na que tiver CSS, e depois tem ainda mais uma pergunta que não vai mudar em nada agora você colocar y ou n.
- Depois disso ele vai criar uma pastinha com o nome que você escolheu.
- Daí tu pega e abre ela no VSCode e aí a brincadeira começa.👻👻👻

# 👾 Dentro do VSCode

- Quando você abrir no VSCode vai estar mais ou menos assim:

exemplo: protege-agro
         |
         |__.angular
         |__.vscode
         |__node modules
         |__public
         |__src

- Essas são as pastas gerais, embaixo ainda vão ter outros arquivos:
  
   - .editorconfig
   - .gitignore
   - angular.json
   - package-lock.json
   - package.json
   - README.md
   - tsconfig.app.json
   - tsconfig.json
   - tsconfig.spec.json

 - Relaxa o coração que a gente só vai mexer dentro de public e src

 - Em public estão somente nossos assets
 - Em src o negócio expande

# src
- Dentro de src vai ter uma outra pasta chamada: app , e outros arquivos:
  
   - index.html
   - main.ts
   - styles.css

# app
- Dentro de app vão ter os seguintes arquivos:
   - app.component.css
   - app.component.html
   - app.component.spec.ts
   - app.component.ts
   - app.config.ts
   - app.routes.ts

- Cada vez que for criar outra pasta que exija esse mesmo estilo, se digita:
- ng generate component nome
  (exemplo: ng generate component cadastro)

 
  
