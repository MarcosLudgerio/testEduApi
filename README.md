# Testes de unidade e integração do serviço EducAPI

Projeto feito para avaliar o serviço da apoio a alfabetização EducAPI.

A aplicação pode ser acessada em [EducAPI](https://api.apps4society.dcx.ufpb.br/educapi/) 
A documentação pode ser acessada en [Documentação](https://api.apps4society.dcx.ufpb.br/educapi/swagger-ui.html). 


## Pré requisitos
É necessário ter o [NodeJS](https://nodejs.org) instalado na sua máquina
Assim como o [JestJS](https://jestjs.io/)

## Executando os testes
Execute no terminal os comandos abaixo
```sh
$ git clone https://github.com/MarcosLudgerio/testEduApi.git
$ cd testEducApi
$ npm install
$ npm run test
```
Após a execução, os testes irão executar e um feedback irá ser exibido na tela

## Métodos de Requisição HTTP

| Método |                Path                |
|:------:|:----------------------------------:|
|   GET  |          /api/listar-todos         |
|   GET  |          /api/evento/{id}          |
|  POST  |           /api/cadastrar           |
|   PUT  |          /api/evento/{id}          |
| DELETE |              /api/{id}             |

## Tecnologias Usadas
![GitHub](https://img.shields.io/github/license/a4s-ufpb/EducAPI?label=licence) ![Type Badge](https://img.shields.io/badge/project%3A-Apps4Society-informational) ![enter image description here](https://img.shields.io/badge/project-SisAlfa-yellow)  ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/a4s-ufpb/EducAPI?color=blueviolet)



- Java 8 
- Apache Maven 3.6.3
- Spring Boot 4
- PostgreSQL 12.3