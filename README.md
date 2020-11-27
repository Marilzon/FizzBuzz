# FizzBuzz

PAGINA: (https://marilzon.github.io/FizzBuzz/)

[X] O codigo gera uma contagem de 1 a 100, exibindo os elementos que satisfazem a condição “FizzBuzz”.

## Descriçoes técnicas

 - *Const* e *let* o mais descritivo possivel.

 - Declarações *let* para que o valor seja apenas de escopo fechado.

 - CSS com foco em flexbox.

## Explicação sobre o algoritimo e detalhes do código.

1 - Referenciando a constante *app*, apontando seletor para *#app*, será o responsavel pelo conteudo renderizado na página.

2 - *if (number > 100) {return;}*, logo se o *number* for maior que 100 o returno sera true, isto encerrara a logica condicional.

3 - guardando na memória o calculo para testar se Fizz e/ou Buzz.

4 - se é *multiplo de 3 e multiplo de 5*, crie o elemento div e atribua a ele o texto *FizzBuzz* e a classe *fizz-buzz*, logica que se repete para *Fizz*, *Buzz*, *FizzBuzz* e o default(não fizz||buzz) que recebem a classe *bg-white*.

5 - a chamada *fizzBuzz(number + 1)* incrementa o valor sequencialmente para que satisfaça a condição, semenhante a lógica *for (i = 0; i <= 100: i++>)*.

6 - A função é executada direto no código com valor inicial 1.

7 - O resultado esta classificado e estilizado em cores diferentes.
