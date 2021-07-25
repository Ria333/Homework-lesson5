// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

/*a        let a = document.getElementById('main_header');
console.log(a);
a.innerText = ('june 2021')*/

/*b         let b = document.getElementsByTagName('ul');
for (const bElement of b) {
    bElement.style.width = '400px';
    console.log(bElement);
}*/

/* c        let c = document.getElementsByClassName('linkList');
for (const cElement of c) {
    cElement.style.width = '50%';
}*/

/* d     let d = document.getElementsByClassName('listElement2');
for (const dElement of d) {
    console.log(dElement);
}*/

/* e      let e = document.getElementsByTagName('li');
for (const eElement of e) {
    eElement.style.background = 'silver';
}*/

/*f   let f = document.getElementsByTagName('a');
for (const fElement of f) {
    fElement.classList.add('ancor');
    console.log(fElement);
}*/
/* g  let f = document.getElementsByTagName('linkList listElement3');
for (const fElement of f) {
   if link.title === 'link3'{
        fElement.style.fontSize = '40px';
    }};*/

//h отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*const link33 = document.querySelectorAll('a')[2];
link33.classList.add ('element_link3');
console.log(link33);*/

//i отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
/*let g = document.getElementsByClassName('sub-header')
console.log(g);
for (const gElement of g) {
    let colorPrompt = prompt ('enter the color');
    if (colorPrompt === 'red'){
        gElement.style.background = 'red';
        console.log(gElement);
    }
    else if (colorPrompt === 'blue'){
        gElement.style.background = 'cornflowerblue';
        console.log(gElement);
}}
console.log(g);*/


// j отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

/*let g = document.getElementsByClassName('sub-header')
for (const gElement of g) {
    let colorPrompt = prompt ('enter the color');
    if (content === 'content 2 segment' && colorPrompt === 'blue'){
        gElement.style.color = 'cornflowerblue';
        console.log(gElement);
    }
}*/

// k отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt
/*let k = document.getElementsByClassName ('content_1');
let g = document.getElementsByClassName ('text_segment text1');
for (const gElement of g) {
    let textPrompt = prompt ('enter the text');
    gElement.innerText = textPrompt;
    console.log (gElement)
}*/

//l   l) отримати елементи p та змінити їм padding на 20px
/*let l = document.getElementsByTagName ('p');
for (const lElement of l) {
    lElement.style.padding = "20px";
    console.log(lElement);
}*/


//m отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
/*let m = document.getElementsByClassName('text2')
for (const mElement of m) {
    mElement.innerText = 'june 2021';
    console.log(mElement);
}*/










