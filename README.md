# m2a_front

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
=======
# Projeto M2A

A M2A visa a expansão das carteiras de MPO(Microcrédito Produtivo e Orientado) para as instituições financeiras parceiras dando ênfase ainda maior aos programas governamentais, com tratamento preferencial e diferenciado às Micro e Pequenas Empresas. Além disso, muda a percepção de que as instituições parceiras são meramente incentivadores de créditos e financiamentos e os empresários apenas tomadores de crédito.

Obs.: Este projeto é uma recriação* do sistema utilizado pela M2A Consultoria Empresarial para a matéria de Projeto Integrador 7 e 8.

*Construção de uma solução online onde os participantes selecionam os empresários que participarão do projeto e fornecerão as informações sobre a gestão de seu negócio por intermédio do preenchimento de um questionário.

## Documentações

<h3 style="color: red;"> Links para as documentações de bibliotecas que foram utilizadas até aqui no desenvolvimento do projeto estão no final desse README.md. </h3>
<!-- <h3 style="color: red;"> Links para as documentações utilizadas até aqui no desenvolvimento do projeto: </h3> -->

- Diagrama de Entidades e Relacionamentos

![Diagrama de Entidades e Relacionamentos](https://user-images.githubusercontent.com/51242246/143957497-0a70a5cf-501c-4d31-b269-af8d9c190c5c.png)

## 🚀 Começando

### 📋 Pré-requisitos

Você irá precisar das seguintes ferramentas para executar o projeto em sua máquina.

```
Ambiente de Desenvolvimento a sua escolha (Ex.: VS Code), Python (Versão 3.9.2 ou superior), Yarn https://yarnpkg.com/
```

### 🔧 Instalação


### Backend
- Faça o clone dos repositório backend
```
git clone {repositorio} && cd {pasta_do_repositório}
```
- Instale as dependências
```
pip install -r requirements.txt
```
- Realize as migrações
```
python manage.py makemigrations
```
```
python manage.py migrate
```
- Semeie as tabelas dominio
```
python manage.py seed
```
- Crie um superuser
```
python manage.py createsuperuser --username=joe --email=joe@example.com
```
- Crie o Info do superuser
```
python manage.py generate_tokens
```
- Rode o backend
```
python manage.py runserver
```

### Frontend
- Faça o clone dos repositório frontend 
```
git clone {repositorio} && cd {pasta_do_repositório}
```

- Instale as dependências
```
yarn install
```

- Rode o frontend
```
yarn start
```

## 📦 Desenvolvimento

Adicione notas adicionais sobre como implantar isso em um sistema ativo.

## 🛠️ Construído com

Ferramentas e Linguagens utilizadas no projeto:

* [Python](https://www.python.org/) - Linguagem
* [Django](https://www.djangoproject.com/) - Framework
* [Django Rest Framework](https://www.django-rest-framework.org/) - Framework Para Criação de APIs com Django
* [VS Code](https://code.visualstudio.com/) - Ambiente de Desenvolvimento
* [Vue](https://vuejs.org/v2/guide/) - Framework Frontend
* [Vuetify](https://vuetifyjs.com/en/getting-started/installation/) - Framwork de Componentes Vue (Material Design)
* [Lucidchart](https://www.lucidchart.com/) - Ferramenta para Diagramar BD

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Desenvolvedor & Tester** - *Desenvolvimento e Tester* - [Carlos](https://github.com/linkParaPerfil)
* **Desenvolvedor & Tester** - *Desenvolvimento e Tester* - [Franklin](https://github.com/franklinarauj)
* **Desenvolvedor & DBA** - *Desenvolvimento e Modelagem do Banco de Dados* - [Matheus](https://github.com/matheus-emuniz)
* **Desenvolvedor & Gerente de Projeto** - *Desenvolvimento e Documentação* - [Murillo](https://github.com/murillenda)
* **Desenvolvedor & Analista de Requisitos** - *Desenvolvimento e Documentação* - [Rafael](https://github.com/RafaelGuido)

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺 
* Obrigado publicamente 🤓.
* etc.
