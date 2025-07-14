const valores = [2,3,6,9]

const users = [
    {name:"Thiago", age: 28},
    {name:"Maria", age: 30},
    {name:"José", age: 16},
]

const numerosMaioresQueCinco = valores.filter(num => num >= 5)

const numerosPares = valores.filter(num => num % 2 === 0)

const menoresDeIdade = users.filter(user => user.age <18)

console.log(menoresDeIdade)

// console.log(numerosPares)

// console.log(numerosMaioresQueCinco)