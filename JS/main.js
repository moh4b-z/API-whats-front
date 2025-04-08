'use script'
import {getListaDeContatos, getListaDeConversas} from "./api.js"
const numeroUser = "11987876567"


async function renderConversa(name) {
    const conversa = document.getElementById("conversa")
    conversa.replaceChildren('')
    const mensagens = await getListaDeConversas(numeroUser, name)
    
    mensagens.forEach(renderMensagem)
}

function criarCampoDeConversa(name){
    const right = document.getElementById("right")
    right.replaceChildren('')

    const top = document.createElement("div")
    top.className = "top"

    const contato = document.createElement("div")
    contato.className = "contato"

    const img = document.createElement("img")
    img.src = "https://i.pinimg.com/136x136/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg"
    img.alt = "Imagem do contato"

    const h2 = document.createElement("h2")
    h2.textContent = name

    contato.appendChild(img)
    contato.appendChild(h2)

    const confg = document.createElement("div")
    confg.className = "confg"

    const botaoBusca = document.createElement("button")
    const iconeBusca = document.createElement("ion-icon")
    iconeBusca.setAttribute("name", "search")
    botaoBusca.appendChild(iconeBusca)

    const botaoMais = document.createElement("button")
    const iconeMais = document.createElement("ion-icon")
    iconeMais.setAttribute("name", "ellipsis-vertical")
    botaoMais.appendChild(iconeMais)

    confg.appendChild(botaoBusca)
    confg.appendChild(botaoMais)
    
    top.appendChild(contato)
    top.appendChild(confg)

    const conversa = document.createElement("div")
    conversa.id = "conversa"

    const envio = document.createElement("div")
    envio.id = "envio"

    const envioInputDiv = document.createElement("div")
    const input = document.createElement("input")
    input.type = "text"
    input.placeholder = "Escreva sua mensagem"
    envioInputDiv.appendChild(input)

    const botaoEnviar = document.createElement("button")
    const iconeEnviar = document.createElement("ion-icon")
    iconeEnviar.setAttribute("name", "caret-forward-outline")
    botaoEnviar.appendChild(iconeEnviar)

    envio.appendChild(envioInputDiv)
    envio.appendChild(botaoEnviar)

    right.appendChild(top)
    right.appendChild(conversa)
    right.appendChild(envio)
}

function renderMensagem(element){
    const conversa = document.getElementById("conversa")
    const caixaDaMensagem = document.createElement("div")
    caixaDaMensagem.className = "linhaMensagem"
    const mensagem = document.createElement("div")
    mensagem.className = "mensagem"
    if(element.sender == "me"){
        mensagem.classList.add("meMensagem")
    }else{
        mensagem.classList.add("contatoMensagem")
    }
    const p = document.createElement("p")
    p.textContent = element.content
    const span = document.createElement("span")
    span.textContent = element.time
    mensagem.appendChild(p)
    mensagem.appendChild(span)
    caixaDaMensagem.appendChild(mensagem)
    conversa.appendChild(caixaDaMensagem)
}

async function renderContatod() {
    const contacts = await getListaDeContatos(numeroUser)
    await contacts.forEach(cardContato)
}

async function cardContato(element){
    const lista = document.getElementById("contatos")
    const contato = document.createElement("div")
    contato.className = "contato"
    const perfil = document.createElement("div")
    perfil.className = "perfil"
    const img = document.createElement("img")
    img.src = "https://i.pinimg.com/136x136/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg"
    const perfilDados = document.createElement("div")
    perfilDados.className = "perfilDados"
    const titulo = document.createElement("h3")
    titulo.textContent = element.name
    const descricao = document.createElement("span")
    descricao.textContent = element.description

    contato.addEventListener('click', async () => {
        criarCampoDeConversa(element.name)
        await renderConversa(element.name)
    })

    perfil.appendChild(img)
    contato.appendChild(perfil)
    perfilDados.appendChild(titulo)
    perfilDados.appendChild(descricao)
    contato.appendChild(perfilDados)
    lista.appendChild(contato)

}



function abrirChat(){
    const Contatos = document.getElementById("left")
    Contatos.classList.toggle("chatTotal")
}
const buttonChat = document.getElementById("chat")
buttonChat.addEventListener('click', abrirChat)
renderContatod()