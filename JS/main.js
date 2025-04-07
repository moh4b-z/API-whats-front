'use script'

export async function getListaDeContatos(numero) {
    const url = `https://api-whats-1-6ulr.onrender.com/v1/whatsapp/data/contact/user/?nu=${numero}`
    
    const response = await fetch(url)
    const data = await response.json()

    return data.contacts
}
export async function getListaDeConversasAll(numero) {
    const url = `https://api-whats-1-6ulr.onrender.com/v1/whatsapp/filter/?nu=${numero}`
    
    const response = await fetch(url)
    const data = await response.json()

    return data.contacts
}
export async function getListaDeConversas(numero, name) {
    const contatos = await getListaDeConversasAll("11987876567")
    let retorno = false

    contatos.forEach(element => {
        if(element.name = name){
            retorno = element.messages
        }
    })
    return retorno
}

async function renderContatod() {
    const contacts = await getListaDeContatos("11987876567")
    contacts.forEach(cardContato)
}

function cardContato(element){
    const lista = document.getElementById("contatos")
    const contato = document.createElement("div")
    contato.className = "contato"
    const titulo = document.createElement("h3")
    titulo.textContent = element.name
    const descricao = document.createElement("span")
    descricao.textContent = element.description

    contato.appendChild(titulo)
    contato.appendChild(descricao)
    lista.appendChild(contato)

}

renderContatod()