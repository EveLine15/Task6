// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

//console.log(`На компьютере с ОС ${navigator.userAgentData.platform} с помощью браузера ${navigator.userAgent.slice(0, navigator.userAgent.indexOf('/'))} я открыл страничку ${location.href} `)


// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const li = document.querySelectorAll('li');
// li.forEach((element, index) => {
//     console.log(element.innerHTML);
//     element.innerText = index;
// });


// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// const forRemove = document.querySelectorAll('.forRemove');
// forRemove.forEach(element => {
//     element.remove();
// });


// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

// const container = document.querySelector('.container');
// const p = document.createElement('p');
// p.innerText = 'some content';
// p.style.fontSize = '36px';
// p.style.fontWeight = 'bold';
// container.appendChild(p);


// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, 
// добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

const container = document.querySelector('.container');
function createTag(name, color, content){
    const newTag = document.createElement(name);
    newTag.innerText = content;
    newTag.style.color = color;
    console.log(newTag);
    container.appendChild(newTag);
    return newTag;
}
const tag1 = createTag('p', 'red', 'I');
const tag2 = createTag('li', 'green', 'can');
const tag3 = createTag('li', 'blue', 'see');
const tag4 = createTag('div', 'pink', 'forewer');


// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// const select = document.querySelector('#defaultSelect');
// for(let i = 1960; i < 2021; i++){
//     const option = document.createElement('option');
//     option.innerText = i;
//     select.appendChild(option);
// }


// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [

// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус 
// зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const ul = document.querySelector('#newNames');
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// clients.forEach(element => {
//     const li = document.createElement('li');
//     li.innerText = `Клиент ${element.name} ${element.order ? 'оплатил' : 'отменил'} заказ`;
//     ul.appendChild(li);
// });


// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://www.devby.io/', 'https://www.google.com/', 'https://www.apple.com/'];
// const body = document.querySelector('body');
// const div = document.createElement('div');
// div.style.padding = '20px';
// div.style.backgroundColor = 'pink';
// div.style.display = 'flex';
// div.style.justifyContent = 'space-between';

// linksArr.forEach(element => {
//     const a = document.createElement('a');
//     a.setAttribute('href', element);
//     a.setAttribute('target', '_blank');
//     a.innerText = element.slice(element.indexOf('.')+1, element.lastIndexOf('.'));
//     div.appendChild(a);
// });
// body.appendChild(div);


// Задание 9*

// Есть массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ];
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ];
// const table = document.querySelector('table');
// users.forEach(element => {
//     const tr = document.createElement('tr');
//     const nameTd = document.createElement('td');
//     nameTd.innerText = element.name;
//     nameTd.style.color = 'red';
//     const ageTd = document.createElement('td');
//     ageTd.innerText = element.age;
//     ageTd.style.color = 'blue';
//     tr.appendChild(nameTd);
//     tr.appendChild(ageTd);
//     table.appendChild(tr);
// });