# __BIBLIOTECA DO SABER__
Aplicativo simples para uma biblioteca desenvolvido em ECMA SCRIPT 6
O intuito é desenvolver uma aplicação simples que contemple todos os desafios propostos pelo professor
Os dados são armazenados no proprio Web Storage
# __AVALIAÇÃO 1__

### Caixas de Diálogo
- [x] prompt
- [x] alert
- [x] confirm
### Temporizadores
- [x] setInterval
- [x] setTimeout
### Funções
- [x] Função anônima com argumento
- [x] Função anônima sem argumento
- [x] Função anônima com retorno
- [x] Função auto-executável - não será aceita a mesma do Module Pattern
- [x] Função com nome
- [x] Função aninhada/local - declarar uma função dentro de outra
- [x] Passagem de uma função como parâmetro para outra função - ambas as funções precisam ser implementadas pelo aluno
- [x] Função Flecha - Arrow Function 
### Eventos
- [x] Evento de carregamento do documento - onload
- [x] Evento de movimento do mouse
- [x] Evento de teclado - usar charCode ou keyCode
- [x] Eventos de formulário - usar onfocus e onblur
- [x] Imprimir alguma propriedade/atributo do objeto event recebido como parâmetro na função tratadora de evento
- [ ] Propagação de eventos no modelo bolha (usar target e currentTarget, ou seja, disparar o evento em um elemento filho e capturar em um elemento pai)
### Acesso aos elementos DOM do HTML
- [x] Via referência DOM pelo id do elemento HTML - acesso sem uso do getElementByID ou querySelector, o id do objeto DOM é o próprio nome da variável
- [x] Via getElementByID()
- [x] Via getElementsByName()
- [x] Via getElementsByTagName()
- [x] Via seletores CSS usados na função querySelector() ou querySelectorAll()
### Tratadores de Evento
- [x] Especificar o tratador de evento inline - registro do evento no HTML
- [x] Especificar o tratador de evento no modo tradicional - registro do evento no JS com prefixo on via atributo de um objeto DOM 
- [x] Especificar o tratador de evento com a função addEventListener - registro do evento no JS
- [x] Usar o operador this em funções tratadoras de eventos.
### Objetos Nativos
- [x] Usar pelo menos 3 métodos de manipulação de array
    - [x] forEach
    - [x] push
    - [x] filter
- [x] Usar laço de repetição (for..in ou for..of ou forEach)
- [x] Usar pelo menos 3 métodos para manipulação de string
    - [x] trim
    - [x] toLowerCase
    - [x] filter
- [x] String Template - a String com crase e ${} 
- [x] Manipulação do CSS de forma nativa via atributo style e classList
### Objetos
- [x] Criar objeto usando função construtora ou notação literal
- [x] Criar objetos a partir da definição de classes do ES6 - a classe precisa ser definida em arquivo separado, sendo o nome do arquivo em letras minúsculas no estilo dashed-case e nome da classe em UpperCamelCase
- [x] Usar herança prototipal nativa ou herança de classes do ES6

# __AVALIAÇÃO 2__

### Qualidade do código
- [x] Usar um Style Guide - apresentar o uso de pelo menos 10 regras do style escolhido (sugerido AirBnb)
    - [x] Use a sintaxe literal para a criação de Arrays
    - [x] Para converter um objeto similar a um array para array, utilize Array#slice.
    - [x] Use aspas simples '' para strings
    - [x] Use ponto . para acessar propriedades
    - [x] Defina variáveis no topo do escopo onde ela se encontra. Isso ajuda a evitar problemas com declaração de variáveis e hoisting
    - [x] Expressões condicionais são interpretadas usando coerção de tipos e seguem as seguintes regras utilizar atalhos como if (name) ao invéz de if (name == '')
    - [x] Use chaves para todos os blocos com mais de uma linha
    - [x] Deixar uma linha em branco depois de blocos e antes da próxima declaração
    - [x] Uso de ponto e vírgula ao final das declarações
    - [x] Utilizar toda a convenção de nomes do Arbnb
- [x] Usar um lint - mostrar a correção de pelo menos 5 problemas informados pelo lint (sugerido JSHint - usar o arquivo .jshintrc disponível no moodle)
    - [x] Ponto e vírgula faltando ao final das declarações
    - [x] Váriaveis declaradas sem necessidade
    - [x] Uso do === ao invéz de ==
    - [x] Uso de '' ao invez de ""
    - [x] incluir use strict nos escopos
- [x] Usar strict mode
- [x] Usar Module Pattern
- [x] Usar pasta assets e subpastas resources e libraries para organizar o código
- [x] Usar let ou const ao invés de var
- [x] Nomes de arquivos minúsculos e separados por hífen (dashed-case)
### Formulário
- [x] Validação de formulário com onsubmit usando os métodos tradicionais
- [x] Validação de formulário com HTML5 API
- [x] Customizar as mensagens nos balões de mensagem
- [x] Usar os atributos de validação dos inputs
- [x] Usar expressões regulares
- [x] Ler e escrever em elementos input com a propriedade value
- [x] Alterar o conteúdo de elementos div ou p com a propriedade innerHTML ou textContent
- [x] Manipulação de elemento de listagem, como checkbox, radio ou select
- [x] Acesso aos elementos de um formulário via hierarquia (caminho) de objetos, ou seja, array forms e elements

# __AVALIAÇÃO 3__

### jQuery
- [x] Uso de seletores CSS - id, classe e tag
- [x] Uso de seletores hierárquicos estáticos - ancestral/descendente, pai/filho, anterior/próximo
- [x] Uso de seletores hierárquicos dinâmicos - parent/children/next
### Efeitos fade ou slide
- [x] Especificar o tratador de algum evento via jQuery
- [x] Manipulação do CSS via função css() e addClass()/removeClass()
- [x] Manipulação do conteúdo de um input e div usando jQuery
- [x] Aplicar um plugin do jQuery (por exemplo, jQuery Mask Plugin)
### Web Storage
- [x] LocalStorage ou SessionStorage
- [x] Leitura e escrita de dados simples (tipos primitivos)
- [x] Leitura e escrita de JSON
### Implementação funcional (basta fazer funcionar uma requisição) 
- [x] AJAX para uma API de terceiros (ex.: buscaCEP, IBGE) ou para a sua própria API criada com ExpressJS na plataforma Node.
