// Criando Função speakGeneric
function speakGeneric(){
    console.log(this.sound)
}

// Criando Objeto DOG
let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

// Criando Objeto CAT
let cat = {
    sound: "Miau",
    speak: speakGeneric
}

// dog.speak();
// cat.speak();

let bindedFunction = speakGeneric.bind(cat);
bindedFunction();