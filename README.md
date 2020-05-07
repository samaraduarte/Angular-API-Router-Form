# Projeto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Exerc�cio Angular - Consumindo Api Rest, Formul�rio e Rotas - Prof. Ramon Pereira
UniBH 2020/1

O objetivo ser� criar uma aplica��o para exibir os dados da Fake API
https://jsonplaceholder.typicode.com/.
1) Criar um projeto do Angular (ng new) IMPORTANTE: dizer sim para a cria��o de do
m�dulo de rotas rotas (primeiro pedido que � feito).
2) Criar os seguintes componentes: (ng generate component
NOMEDOCOMPONENTE)
a) Nav
b) User
c) Post
d) Comment
3) Crie um arquivo de interface para cada um dos componentes User, Posts,
Comments.
a) Crie uma pasta models e salve todos os modelos dentro dela.
b) Conferir no site as propriedades que devem existir em cada um dos
componentes. (https://jsonplaceholder.typicode.com/)
c) Na interface do Post, al�m de todas as propriedades citadas adicione uma
booleana chamada exibirComentario inicializada como false por padr�o.
4) Crie uma pasta chamada services para os servi�os. Crie um servi�o para cada um
dos componentes, exceto para a barra de navega��o. (ng generate service
services/NOMEDOSERVICO)
5) Instale o Bootstrap (npm install bootstrap)
6) Importe o Bootstrap no arquivo Angular.json
"styles": [
 "node_modules/bootstrap/dist/css/bootstrap.min.css",
 "styles.scss"
]
** Adicionar a linha destacada acima
7) Nos servi�os User, Post e Comment:
a) crie os m�todos Get, GetById e Post utilizando Async Await. Os m�todos
GetById dever�o receber um id como par�metro e os m�todos posts dever�o
receber um objeto do tipo espec�fico de cada servi�o como par�metro.
b) Os servi�os dever�o ser Injectable e providos forRoot. Este j� � o
comportamento padr�o quando cria pelo angular CLI, s� conferir.
c) Para realizar as requisi��es HTTP voc� dever� importar o HttpClient do
�@angular/common/http� em cada um dos servi�os.
8) No app module:
a) Para utilizar o Http, voc� dever� importar o HttpClientModule tamb�m do
�@anglar/common/http�. Este m�dulo dever� estar inserido nos imports e nos
providers.
b) Para utilizar o formul�rio, voc� tamb�m dever� importar o FormsModule
import { FormsModule } from '@angular/forms' e adicionar ele nos Imports.
9) No Typescript de cada um dos componentes:
a) importe sua respectiva Interface
b) importe seu respectivo servi�o (se n�o tiver importado na quest�o anterior)
c) crie uma propriedade do tipo da interface
d) crie uma propriedade que ser� um array do tipo da interface
e) instancie o servi�o atrav�s de inje��o de depend�ncia no construtor da
classe do componente
f) execute a chamada da fun��o get dentro do ngOnInit (n�o esque�a de
colocar ele como ass�ncrono)
10) No typescript do Post Component
a) Crie a fun��o onSubmit do formul�rio
b) A fun��o onSubmit dever� receber os dados de submiss�o do formul�rio e
ativar o servi�o de inser��o de dados do PostServices
c) Instancie a propriedade Post como vazia para que ela possa ser usada com
o ngModel ( post: Post = {} as Post;)
11) No typescript do Comment Component al�m do j� citado
a) Dever� ter um @Input para receber o id do Post
b) Dever� carregar os coment�rios desse post atrav�s do servi�o de
getComentarios, adicionando o par�metro de filtragem por id do post na rota
12) No typescript do Routing Module
a) Adicionar na constante routes as rotas parada cada um dos componentes no
padr�o path, componente.
ex: { path: 'home', component: HomeComponent }
13) No template do Nav Component:
a) Adicione um nav contendo uma ul e um li para cada um dos itens: Usu�rios,
Posts, Coment�rios
b) Estilize esses elementos para serem exibidos em linha (display: inline)
c) Adicione o link de routerlink para cada um deles a referida rota criada no
componente (exercicio 12). Dica: a routerLink=�caminho�
14) No template do User component:
a) Crie uma tabela para listar os dados do usu�rio que ser�o retornados do
servi�o, dever� ser exibido um usu�rio por linha. (Utilize ngFor)
15) No template dos Coment�rios:
a) Crie um cart�o para exibir os coment�rios de um determinado Post. Pode ser
um bloco de divis�o.
16) No template dos Posts
a) Crie um formul�rio para inserir um novo Post;
b) Declare o nome do formul�rio como ngForm
c) Adicione o evento (ngSubmit) chamando a fun��o de onSubmit passando o
formul�rio como par�metro
d) Adicione os inputs: T�tulo (name: title), coment�rio (name: body) e um select
para selecionar um usu�rio (name: userId) este select dever� ser preenchido
dinamicamente utilizando o servi�o de getUsu�rios ( Neste momento
Instanciar o servi�o de getUsuarios com inje��o de depend�ncia no
typescript)
e) Crie uma divis�o com hr
f) Crie divis�es para exibir todos os dados dos posts que ser�o retornados pelo
servi�o de Posts
g) No final de cada divis�o dever� ter a chamada do componente Coment�rios
passando como input o id do post e com um ngIf para verificar o estado do
booleano exibirComentario deste post;
h) Adicione um bot�o para Exibir Coment�rios que ativa uma fun��o
exibicaodeComentarios que recebe um id de post como par�metro.
i) A fun��o exibicaodeComentarios dever� gerenciar o estado da propriedade
exibirComentario do respectivo post alterando para true para que os
coment�rios sejam exibidos na tela.
17) No template do app.componente:
a) Remova todo conte�do
b) Inclua o componente barra de Navega��o (NavComponent)
c) Inclua o componente <router-outlet></router-outlet>
