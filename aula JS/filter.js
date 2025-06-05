/*
    FILTER
    - Cria um novo array, a parte do array percorrido (array ariginal)
    - Cria um novo array APENAS com os elementos filtrados.
    - Aceita 3 parametros
     - item do array
     - index
     - array completo

     return true -> Item atual passa para o novo array
     return false -> Item atual NÃO passa para o novo array


     const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];


const newList = list.filter((number) => {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
});
console.log(newList)



*/



const compaines = [

    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

const newCompaines = compaines.map(compaines => {
    return {
        newValue: compaines.marketValue - (compaines.marketValue * 0.1)
        
    }

})

const newList = compaines.filter((compaines) => {
    if (compaines.foundedOn > 1990) {
        return true;
    } else {
        return false;
    }   
    
 })

const newTotal = newCompaines.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.newValue;
}, 0)



console.log(newCompaines, newList, newTotal)
