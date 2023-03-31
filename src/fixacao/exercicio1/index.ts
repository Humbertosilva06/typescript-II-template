/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/


//3 (Criação do enum com cores do arco iris)
 enum COR_FAVORITA{
  COR_1 = "Azul",
  COR_2 = "Amarelo",
  COR_3 = "Vermelho",
  COR_4 = "Verde"
 }

//2.2
//3 (Mudei a corFavorito de tipo string para o enum)
type TPersons ={
  nome:string,
  idade:number,
  corFavorita:COR_FAVORITA
}

//1.

const person:TPersons = {

  nome:"Humberto",
  idade:33,
  corFavorita:COR_FAVORITA.COR_1
}

//2.1
//3 (na cor favorita em vez da string, color o enum.valor)
const person2:TPersons = {

  nome:"Humberto",
  idade:33,
  corFavorita:COR_FAVORITA.COR_2
}

const person3: TPersons = {

  nome:"Humberto",
  idade:33,
  corFavorita:COR_FAVORITA.COR_3
}

const person4: TPersons = {

  nome:"Humberto",
  idade:33,
  corFavorita:COR_FAVORITA.COR_4
  
}


console.log(person2)