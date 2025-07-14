const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (e) =>{
    console.log(e.key)
})

inputForm.addEventListener("focus", (e) =>{
    inputForm.style.backgroundColor = "#FF0"
})
// para quando clicar dentro (focus destaca)

inputForm.addEventListener("blur", (e) =>{
    inputForm.style.backgroundColor = ""
})
// blur, tira a cor de destaque

function searchResult(){
    const valorBusca = inputForm.value.trim() //trim tira os espaços das extremidades
    if(valorBusca){
        resultadoDiv.textContent = `Você buscou: ${valorBusca}`
    } else {
        resultadoDiv.textContent = "Por favor, insira algo na busca."
    }
}

botaoBusca.addEventListener("click", (e) =>{
    searchResult()
})