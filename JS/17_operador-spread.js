// copiar um array

const numeros = [1,2,3,4]

const numeros2 = [5,6,7,8,9]

const copia = [...numeros]
// os 3 pontos faz a função de copiar, e na frente o array que será copiado

// console.log(copia)

// concatenar arrays
 
const arraysConcatenados = [...numeros,...numeros2]

// console.log(arraysConcatenados)

// adicionando elementos no array

const novoArray = [10,...arraysConcatenados,30]

// console.log(novoArray)


// objetos

const usuario = {nome:"Ana",idade:"30"}

const copiaUsuario = {...usuario}

// console.log(copiaUsuario)

//modificando objetos

const usuarioAtualizado = {...usuario,idade:25,cidade:"Florianópolis"}

// console.log(usuarioAtualizado)

const novousuario = {nome:"João",idade:32}

const novosDadosDoUsuario = {genero:"Masculino",DataNascimento:"11/05/2000"}

const usuarios = {...novousuario,...novosDadosDoUsuario}

console.log(usuarios)




