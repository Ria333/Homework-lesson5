// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let paragraph = document.getElementById('content');
// console.log(paragraph);
//
//
//1 let block = document.getElementById('rules');
// console.log(block);
//
//2 paragraph.innerText='bla-bla-bla-bulk'
//
//3 block.innerText='bim-bom-bom'

//4 let paragraph = document.getElementById('content');
//     paragraph.style.background = 'tomato';
//
// let block = document.getElementById('rules');
// block.style.background = 'tomato';
//
// let ulText =document.getElementsByTagName('li')
// console.log(ulText);
// for (let ulTextElement of ulText) {
//     ulTextElement.style.background = 'tomato';
// }


//5 let paragraph = document.getElementById('content');
// paragraph.style.color = 'cornflowerblue';
//
// let block = document.getElementById('rules');
// block.style.color = 'cornflowerblue';
//
// let ulText =document.getElementsByTagName('li')
// console.log(ulText);
// for (let ulTextElement of ulText) {
//     ulTextElement.style.color = 'cornflowerblue';
// }


//6 let block = document.getElementById('rules');
// console.log(block);

//7// let target = document.getElementById('target');
// let block1 = document.getElementsByClassName('fc_rules');
// for (const block1Element of block1) {
//     block1Element.addEventListener ('click', function(e){
//         target.innerText = e.target.innerText});
//     block1Element.addEventListener ('click', function(){
//         console.log ('bla')});
// }


//8  let ulText =document.getElementsByTagName('li')
// // console.log(ulText);
// // for (let ulTextElement of ulText) {
// //     ulTextElement.style.color = 'red';
// // }

