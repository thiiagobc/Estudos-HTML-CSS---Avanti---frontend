// let frutas = ["banana","maça","mamão","abacate","pêssego"]

// for(let fruta of frutas){
//     console.log(fruta)
// } 

let pessoa = {nome:"Jõao",idade:30,genero:"masculino"}
for(let key in pessoa){
    console.log(`${key}:${pessoa[key]}`)
}