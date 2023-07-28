var langagesProg = [];

while(true) {
    var promptText = prompt('Entrez un langage de programmation');
    if(promptText != '') {
        langagesProg.push(promptText);
    } else {
        break;
    }
}
console.log(langagesProg.length);

for(var i = 0; i < langagesProg.length; i++) {
    alert(langagesProg[i]);
}