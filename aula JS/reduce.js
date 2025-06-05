/*
    REDUCE
        - Retorna um valor (pode ser um novo array, um objeto, um string, um numero, etc)
        - Aceita 4 paremetros
        - acumulador
        - valor atual
        - index 
        - array completo 
        
        const list = [1, 2, 3, 4, 5, 6];

const total = list.reduce( (acumulador, valorAtual, index, array) => {
    return acumulador + valorAtual + index;
}, 0);


console.log(total);

*/

 const cart = [
 {ProductName: 'Abobora', price: 5, kg: 1},
 {ProductName:'Pepino', price: 3.55, kg: 1.3},
 {ProductName:'Limão', price: 1.2, kg: 2 },
 {productName:'Abacate', price: 5.4, kg: 1.67},
 {ProductName:'Morango', price: 11.9, kg: 3},
 
 ]

 const total = cart.reduce((acumulador,valorAtual)=>{
    return acumulador + valorAtual.price * valorAtual.kg;

 }, 0)


console.log(total)

 