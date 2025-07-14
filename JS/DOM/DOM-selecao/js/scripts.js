// seleção por ID

const content = document.getElementById("content")
// como é um elemento GET, não precisa da # (para pegar)

console.log("content", content)

content.innerHTML = `<p>Parágrafo de texto</p>`
// innerHTML serve para inserir o HTML dentro do elemento principal
content.style.backgroundColor="#F00"
content.style.fontSize = "30px"

// seleção por classe

const classText = document.getElementsByClassName("text")

console.log("classText",classText)

for(text of classText){
    text.style.color = "#00F"
}

// seleção por tag

const titles = document.getElementsByTagName("h2")

console.log("titles",titles)

for(title of titles){
    title.style.fontSize = "40px"
}

// query selector

const elementFeature = document.querySelector("#feature")
/* dentro das Aspas é necessário definir, se for ID ("#"), se for class ("."), se for a tag, pode ser ela normal. */

const newElement = document.createElement("p")
// newElement cria o novo elemento P

newElement.textContent = "Um novo parágrafo"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend",`
    <div>
    <p>Outro parágrafo criado dinamicamente</p>
    </div>`)

/* insertAdjacentHTML pode ser feito para substituir esse passo aa passo de criar o elemento, inserir conteúdo  e depois dar o append como foi feito.*/

document.body.insertBefore(newElement,elementFeature)

// query selectorAll

const links = document.querySelectorAll("#links a")

console.log("links",links)

for(link of links){
    link.classList.add("feature-links")
    console.log(link.getAttribute("href"))
    link.target = "_blank"
    link.title = link.getAttribute("href").slice(0,-5)
    // valor negativo começa da direita pra esquerda, com positivo é o inverso
}

// é possível trocar o add ou remove pra remover a classe

//remove, diferente do display none que só oculta, ele remove o elemento.

content.remove()

// navegação pelo DOM

const lista = document.querySelector("#links ul")

lista.parentNode.style.backgroundColor = "#F00"

console.log("qual elemento?",lista.parentNode)
// pega o elemento acima do que foi "pedido", ou seja, pegou a DIV que está acima

lista.children
console.log("filho", lista.children)

for(list of lista.children){
    list.style.fontSize = "50px"
}

lista.firstElementChild.style.fontSize = "20px"

