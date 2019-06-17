console.log ('Uszanowanko! Nieźle, że tu zaglądasz ;)');
const name = 'Bartłomiej Zięba';
const age = 29;
console.log (name);
console.log (age);
console.log (`Nazywam się ${name} i mam ${age} lat`);

const heading = document.querySelector('.mainpage__header--js');
console.log (heading.innerHTML);
heading.innerHTML = 'Kurs WTF - Strona domowa (zmienione w JS!)'
const paragraphs = document.querySelectorAll('p');
console.log (paragraphs);
console.log (paragraphs[3]);