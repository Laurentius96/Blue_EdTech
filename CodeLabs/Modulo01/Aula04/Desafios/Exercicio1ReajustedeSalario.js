//-------------------- CodeLab (Aula 04) - Exercício 01 -------------- \\

/* 
 1. Reajuste salarial:
 As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
 Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
 salários até R$ 280,00 (incluindo) : aumento de 20%
 salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
 salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
 salários de R$ 1500,00 em diante : aumento de 5%
 Após o aumento ser realizado, informe na tela:
 o salário antes do reajuste;
 o percentual de aumento aplicado;
 o valor do aumento;
 o novo salário, após o aumento."
*/

console.log("Programa de Reajustes.");
let salario = parseFloat(prompt("Digite seu salário atual"));
let aumento 
let percentual
let dif 


 if (salario <=280)
    {
     aumento = (0.2*salario) + salario;
      percentual = "20%";
      dif = aumento - salario;
     
    }
    else if (salario > 280 && salario <= 700)
    {
    	aumento = (0.15*salario)+salario;
      percentual = "15%";
      dif = aumento - salario;
      
    }
     else if (salario > 700 && salario <= 1500)
    {
    	aumento = (0.10*salario)+salario;
      percentual = "10%";
      dif = aumento - salario;
      
    }
    else if (salario > 1500)
    {
    	aumento = (0.05*salario)+salario;
       percentual = "05%";
      dif = aumento - salario;
      
    }

console.log(`O salário antes de ser reajustado era R$${salario}`);
console.log(`O percentual de de reajuste foi ${percentual}%`);
console.log(`O valor de aumento foi R$${dif}`);
console.log(`O seu novo salario é R$${aumento}`)