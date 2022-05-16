// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// const textContent = document.getElementById('content');
// text = textContent.textContent
// console.log(text);

// -- отримує текст з блоку з id "rules"
// const textRules = document.getElementById('rules');
// text = textRules.textContent
// console.log(text);
//
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// newText = textContent.innerText = 'hello'
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший
// newText = textRules.innerText = 'hello again'

// -- змініть кожному елементу колір фону на червоний
// const styleAll = document.body.children;
// for (const item of styleAll) {
//     item.style.background = 'silver';
// }

// -- змініть кожному елементу колір тексту на синій
// const colorAll = document.querySelectorAll('*')
// for (const item of colorAll) {
//     item.style.color = 'brown';
// }

// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(textRules);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// const colorFcRules = document.getElementsByClassName('fc_rules');
// for (const item of colorFcRules) {
//     item.style.color = 'green';
// }

// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// const header = document.getElementById('main_header');
// header.classList.add('main_header')

// b) робить шириниу елементу ul 400px
// const ulElement = document.getElementsByTagName('ul')

// for (const item of ulElement) {
//     item.style.width = '400px'
//     item.style.textAlign = 'center'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// const linkListStyle = document.getElementsByClassName('linkList');
// for (const item of linkListStyle) {
//     item.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// const textElementLE2 = document.querySelector('.listElement2');
// console.log(textElementLE2);
// textElementContentLE2 = textElementLE2.innerHTML
// console.log(textElementContentLE2);
// textElementLE2.innerHTML = `${textElementContentLE2} <br> Lorem ipsum dolor sit amet.`

// e) отримує всі елементи li та змінює ім колір фону на сірий
// const liElements = document.querySelectorAll('li');
// for (const item of liElements) {
//     item.style.background = 'silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// const aElements = document.getElementsByTagName('a')
// for (const item of aElements) {
//     item.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (const item of aElements) {
//     if (item.innerText === 'link3') {
//         item.style.fontSize += '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (const item of aElements) {
//     item.classList.add('element_' + item.innerText);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeaderStyle = document.getElementsByClassName('sub-header')
// let colorA = prompt('Enter background color of a-links:')
// for (const item of subHeaderStyle) {
//     item.style.background = `${colorA}`
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const item of subHeaderStyle) {
//     if (item.innerText.toLowerCase().includes('content 2')) {
//         item.style.color = 'blue'
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const content1El = document.querySelector('.content_1');
// content1El.innerText = `${prompt('enter any text:')}`


// l) отримати елементи p та змінити їм padding на 20px
// const pElements = document.getElementsByTagName('p');
// for (const item of pElements) {
//     item.style.padding += '20px'
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const text2Elements = document.querySelector('.text2');
// text2Elements.innerText = 'march-2022'


let array = [1, 2, [3, 45, 67], 8, [9, 1011, [12, 13, 14, [15, 16, 1718]]]];

// debugger
function foo(arr) {
    let newArr = [];
    for (let item of arr) {
        if (item.length === undefined) {
            console.log(item);
            newArr.push(item)
        } else {
            foo(item)
        }
    }
    return newArr
}
console.log(foo(array));
