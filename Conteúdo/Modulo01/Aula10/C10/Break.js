/* ------------ Estruturas de repetição (Aula 10) - Break ------------  


1)Break

    • O comando BREAK encerra o loop atual, switch, ou o loop que
    foi informado no label e transfere o controle de execução do
    programa para o comando seguinte. O comando break inclui
    um label opcional que permite ao programa que encerre a
    execução da estrutura que possui o nome informado no label.
    O comando break deve estar dentro dessa estrutura informada
    pelo label. A estrutura que possui o nome informado pelo label
    pode ser qualquer comando block, não é necessário que seja
    um loop.

    • Exemplo:
    break[label];

    • A função a seguir possui um comando break que encerra o
    loop while quando a variável i vale 3, e então retorna o valor 3x.

        function testaBreak= (x){
        var i = 0;
        while (i < 6){
        If (i ==3){
        Break;
        }
        i += 1;
        }
        Return i * x;
        }

-------------------------------------------------------------------------*/

let carros = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  console.log(carros[0]);
  console.log(carros[1]);
  break list;
  console.log(carros[2]);
  console.log(carros[3]);
}