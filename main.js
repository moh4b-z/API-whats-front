'use script'

export async function getListaDeContatos(numero) {
    const url = `https://api-whats-1-6ulr.onrender.com/v1/whatsapp/data/contact/user/?nu=${numero}`
    
    const response = await fetch(url)
    const data = await response.json()

    return data.contacts
}
export async function getListaDeConversas(numero) {
    const url = `https://api-whats-1-6ulr.onrender.com/v1/whatsapp/filter/?nu=${numero}`
    
    const response = await fetch(url)
    const data = await response.json()

    return data.contacts
}