const valores = [2,3,6,9]

const products = [
    {name:"cadeira", price: 400},
    {name:"Mesa", price: 600},
    {name:"Tv", price: 1900},
]

const somaTotalDosValores = valores.reduce((acc, val) => acc + val, 0) 
// acc = acumulador, val = valores, são obrigatórios.

const somaTotalDosProdutos = products.reduce((acc,val) => acc + val.price, 0)

// console.log(somaTotalDosValores)
console.log(somaTotalDosProdutos)