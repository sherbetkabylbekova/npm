const greeting = {
    en: "Hello",
    ru: "Privet",
    kg: "Salam",
    uk: "Privit"
}
const sayGreting = (lang) => {
    return greeting[lang]
}
export {sayGreting
}