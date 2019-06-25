console.log ('Uszanowanko! Nieźle, że tu zaglądasz ;)');
const name = 'Bartłomiej Zięba';
const age = 29;
console.log (name);
console.log (age);
console.log (`Nazywam się ${name} i mam ${age} lat`);

const paragraphForJs = document.querySelector('.paragraph-for-js');
console.log (paragraphForJs.innerHTML);
paragraphForJs.innerHTML = 'paragraf dla JS <strong> (zmienione w JS!) </strong>'
const paragraphs = document.querySelectorAll('p');
console.log (paragraphs);
console.log (paragraphs[3]);

const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat`)
}
welcome(`Bartek`, 29)
