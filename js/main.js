// ПЕРЕМЕННЫЕ

// let productName = 'IPhone', productPrice;
// productPrice = 1000;
// // productName = 'IPhone';
// productName = 'Android'
// console.log(productName);

// let x = 'world';
// let y = `hello ${x}`

// console.log(y);

// let g = 1;
// let gg = '4';
// let c = g * gg
// console.log(typeof c);
// console.log(++g)

// let numb1 = 25, numb2 = numb1++;
// console.log(numb1++);
// console.log(numb1, numb2);


// let a = 'слово', b = 'Слово';
// console.log(a > b);

// let a = true, b = 0;
// console.log(a < b);

// let a = '1', b = 1;
// console.log(a !== b);
// console.log(a != b);
// console.log(undefined + 5);
// console.log(typeof null);
// console.log(null >= 0, null == 0);
// console.log(null+null);
// console.log(undefined == 0);

// let a = '1', b = '1234';
// console.log(typeof a == typeof b);

// let a = 6;
// let b = a > 6 ? true : a < 6 ? true : false;
// console.log(b);

// for (let i = 0; i <= a; i++) {
//     if (i == 2 || i == 3) {
//         console.log(2, 3);
//     }
//     else if (i == 3) {
//         console.log(3);
//     }
//     else if (i == 4) {
//         console.log(4);
//         break;
//     }
//     else {
//         console.log(false);
//     };
// };


// let res = null ?? 0 ?? true;
// let res = 2 && 1 && 2;
// console.log(res);

// let a = 2, b = 12, result = 0;

// for (a; a <= b; a++) {
//     result += a;
// };

// console.log(result);
// let message = 'Hello';

// function showMessage() {
//     let message = 'Hi';
//     alert(message);
// };

// showMessage();
// console.log(message);

// let message = 'Hello';

// function showMessage() {
//     message = 'Hi';
//     alert(message);
// };

// showMessage();
// console.log(message);

// function showMessage(name = 'noName') {
//     alert(name);
// }

// showMessage();

// function sum(a, b) {
//     let res = a + b
//     return res;
// }

// let b = sum(3, 5);
// console.log(b);


// function alertMessage() {
//     alert('Hello');
// }

// let alertFunc = function () {
//     alert('hihihi');
// }

// alertFunc();
// console.log(alertFunc);


// let a = prompt('sdf', '');

// console.log(a);

// result = confirm('sdf');

// alert(result);


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask(
//     "Вы согласны?",
//     function () { alert("Вы согласились."); },
//     function () { alert("Вы отменили выполнение."); }
// );


// let sum = (a, b) => a + b;
// alert(sum(1, 2));

// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//     let result = a + b;
//     return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };

// alert(sum(1, 2)); // 3




// const a = {
//     name: 'Danya',
//     age: 21,
//     'geo position': 'moscow',
// };

// // let a = new Object()
// a.lastName = 'Kim';
// a.name = 'Oleg';
// delete a.age;

// console.log(a['geo position']);
// console.log(a);


// // простые числа из диапазона
// for (let i = 1; i < 20; i++) {
//     let count = 0;
//     for (let a = 1; a <= i; a++) {
//         if (i % a === 0) {
//             count++;
//         }
//     }
//     if (count === 2) {
//         console.log(i);
//     }
// }


// let createUser = function(name, age) {
//     return {
//         name: name,
//         age, // если у ключа-значения одинаковое имя, можно писать так
//     }
// }

// const user1 = createUser('Danya', 21);
// const user2 = createUser('Oleg', 25);

// console.log(user1, user2);

// let a = 123;

// let obj = {
//     property: a,
//     [a]: 'hi',
//     777: 123,
// }

// console.log(obj['777']);

// // Копирование объекта 1 способ
// let objCopy = {};

// for (let key in obj) {
//     objCopy[key] = obj[key];
// }

// objCopy.property = 'aaa';

// console.log(objCopy)
// console.log(obj);

// // Копирование объекта 2 способ

// let objCopy = Object.assign({}, obj)

// console.log(objCopy);

// let Clone = {
//     age: 21,
// };

// Object.assign(Clone, obj);

// console.log(Clone);

// let user = {
//     name: 'Danil',
//     age: 21,
//     sayHi() {
//         alert('Hi');
//     },
// }

// // user.sayHi = function () {
// //     alert('Hi');
// // };

// user.sayHi();


// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         alert(this.name); // приведёт к ошибке
//     }

// };


// let admin = user;
// user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.


// console.log(admin);
// admin.sayHi();


// let objec = {
//     name: '123',
// }

// let func = function () {
//     return this.name;
// }

// objec.say = func;


// console.log(objec.say());
// console.log(objec);


// function User(name = '1', age = '2') {
//     this.name = name;
//     this.age = age;
// }

// let user = new User();
// console.log(user);

// let user = new function () {
//     this.name = 'John',
//     this.isAdmin = 'false';
// }

// let use = new user();

// console.log(use)


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('Введите a: ', 0);
//         this.b = +prompt('Введите b: ', 0);
//     },
//     this.sum = function() {
//         return this.a + this.b;
//     },
//     this.mul = function () {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt('Введите число: ', 0);
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value);


// const user1 = {
//     name: 'Danya',
//     address: {
//         street: 'Pushkina'
//     }
// }

// console.log(user1.address?.street?.name?.privet);


// let billion = 1000000000; // 1e9
// let billion1 = 5.2e1;

// console.log(billion, billion1);

// let ms = 1e-4 // 0.0001

// console.log(ms);

// console.log(0xFF, 0b11, 0o77); // шестнадцетиричная, двоичная и восьмеричная

// let num = 255;

// console.log(num);
// console.log(num.toString(2)); // аргумент = система счисления

// console.log((123).toString(16));
// console.log(123..toString(16));

// let num = 5.254;

// console.log(Math.floor(num)); // округление в меньшую сторону
// console.log(Math.ceil(num)); // округление в большую сторону
// console.log(Math.round(num)); // округление по математическому принципу
// console.log(+num.toFixed(1)); // = Math.round, но можно указать кол-во символов после запятой, выводит String

// console.log(parseInt('ff', 16));
// console.log(0xff);

// function readNumber() {
//     let arg;
//     do {
//         arg = prompt('Введите число: ');
//     }
//     while (isNaN(arg))
//     if (arg === '') return null;
//     return arg;
// }

// alert(readNumber());

// function random(min, max) {
//     let a;
//     do {
//         a = +(Math.random() * 10).toFixed(0);
//     }
//     while (a < min || a >= max)
//     a += Math.random();
//     return a;
// }

// alert(random(0, 1));



// function randomInteger(min, max) {
//     let a;
//     do {
//         a = +(Math.random() * 10).toFixed(0);
//     }
//     while (a < min || a > max)
//     return a;
// }

// alert(randomInteger(1, 5));



// let single = 'single-text';
// let double = "double-text";
// let backticks = `backticks`;

// console.log(`${single} text`);

// let anyText = `string1
// string2
// string3
// `;
// let anyText = 'string1\nstring2\nstring3'

// console.log(anyText);

// let anyTex = '\'Hello\' \\world';
// let anyText = '"Hello" world';

// console.log(anyTex);
// console.log(anyTex.length);
// console.log(anyTex[2]);
// console.log(anyTex.at(-2));

// console.log(anyTex[100]);
// console.log(anyTex.at(100));
// console.log(anyTex.charAt(100)); // выведет пустую строку

// console.log(anyTex.charAt(anyTex.length - 1))

// anyTex[1] = 'i' // Неправильно
// anyTex = anyTex[0] + 'i';
// console.log(anyTex);
// console.log(anyTex.toUpperCase());

// let text = 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit.';

// console.log(text.indexOf('sit')); // Возвращает индекс первого символа первого из найденных подстрок

// console.log(text.indexOf('sit', 20)); // игнорирование первых 20 символов
// console.log(text.lastIndexOf('sit', 18)); // выводит индекс последнего совпадения из первых 18 символов

// console.log(text.includes('Lorem', 20)) // если подстрока есть, возвращает булевый тип. Игнорирует первые 20 символов

// console.log(text.slice(2, 7)); // возвращает строку с индексами от 2 до 7 (невключительно)

// console.log(text.slice(-5, -1));

// console.log(text.substring(7, 2)) // тот же slice, но позволяет указывать старт и конец наоборот, не поддерживает отрицательные значения


// for (let char of 'Hello') {
//     console.log(char);
// }

// console.log('Abc'.localeCompare('abc'));


// function ucFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(ucFirst(''));


// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
// }

// console.log(checkSpam('xXx'));


// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '…';
//     }
//     return str;
// }

// console.log(truncate('Всем привет!', 20))


// function extractCurrencyValue(str) {
//     if (str.at(0) === '$' && !isNaN(str.slice(1))) return str.slice(1);
//     return false;
// }

// console.log(extractCurrencyValue('$120'))


// let num = 1234;
// num = num.toString(2);
// let count = 0;
// for (let char of num) {
//     if (char === '1') {
//         count++;
//     }
//     console.log(count);
// }



// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// styles[1] = 'Классика';
// styles.shift();
// styles.unshift('Рэп', 'Рэгги');

// console.log(styles);


// function sumInput() {
//     let count = 0;
//     let arr = [];
//     let a;
//     do {
//         a = prompt();
//         if (isNaN(a) || a === null || a === '') break;
//         arr.push(+a);
//         count += +a;
//     } while (true);
//     return count;
// }

// console.log(sumInput());



const array = [1, 2, 3, 4, 5];

// delete array[2]; // удаляет элемент, но оставляет empty

// array.splice(-2, 2, 10, 11); // удаляет элементы начиная с индекса -2 в кол-ве 2 шт и заменяет их на 10, 11
// array.splice(0, 0, 100) // добавляет элемент на индекс 0 без удаления
// console.log(array);

// let newArray = array.slice(1, 4); // подмассив с новой ссылкой, без аргументов создает целую копию
// console.log(newArray);

// const newArray = array.slice();

// console.log(newArray == array);


// let arr = [10, 10];
// let newArray = array.concat([0, 1], arr); // соединяет массив с примитивами или другими массивами или объектами
// console.log(newArray);


// ПЕРЕБОР МАССИВА


// ["Бильбо", "Гэндальф", "Назгул"].forEach(alert);
// ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`);
// }); // перебирает массив


// ПОИСК В МАССИВЕ


// let arr = [1, 0, false, 1];

// alert(arr.indexOf(1)); // 0
// alert(arr.lastIndexOf(1)); // 3
// alert(arr.indexOf(false)); // 2
// alert(arr.indexOf(null)); // -1

// alert(arr.includes(1)); // true

// const arr = [NaN];
// alert(arr.indexOf(NaN)); // -1 (неверно, должен быть 0)
// alert(arr.includes(NaN));// true (верно), правильно обрабатывает NaN, в отличие от indexOf


// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];

// let user = users.find(item => item.id == 1); // item, index и/или array в качестве аргумента

// console.log(user); // Вася


// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" },
//     { id: 4, name: "Вася" }
// ];

// // Найти индекс первого Васи
// alert(users.findIndex(user => user.name == 'Вася')); // 0

// // Найти индекс последнего Васи
// alert(users.findLastIndex(user => user.name == 'Вася')); // 3


// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);

// console.log(someUsers); // 2



// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length); // преобразует элементы массива в длину элементов
// console.log(lengths); // 6,8,6



// let arr = [1, -2, 15, 2, 0, 8]

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// arr.sort(compareNumeric);

// console.log(arr);

// arr.sort(function (a, b) { return a - b; });

// console.log(arr)


// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (неправильно)

// alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (правильно!)

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert(arr); // 5,4,3,2,1



// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// console.log(arr);


// let arr = ['Вася', 'Петя', 'Маша'];

// let str = arr.join(', '); // объединить массив в строку через ,

// alert(str); // Вася;Петя;Маша



// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach((it) => sum += it);

// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result); // 15

// console.log(sum);

// console.log(Array.isArray(arr));



// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };

// let users = [
//     { age: 16 },
//     { age: 20 },
//     { age: 23 },
//     { age: 30 }
// ];

// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);

// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23



// function camelize(str) {
//     return str
//         .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//         .map(
//             // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//             // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }

// console.log(camelize('background-color'))


// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//     return arr.filter(item => a <= item && item <= b);
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);

// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++){
//         if (a > arr[i] || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// filterRangeInPlace(arr, 2, 4);
// console.log(arr);



// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);


// let arr = ['HTML', 'JavaScript', 'CSS'];

// let sorted = copySorted(arr);

// function copySorted(arr) {
//     return arr.slice().sort((a, b) => a.localeCompare(b));
// }

// console.log(sorted);
// console.log(arr);


// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function (str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     }

//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }

// let object = new Calculator();

// console.log(object.calculate('1 - 2'));



// let vasya = {
//     name: 'Вася',
//     age: 25,
// };

// let petya = {
//     name: 'Петя',
//     age: 30,
// };

// let masha = {
//     name: 'Маша',
//     age: 28,
// };

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name)

// console.log(names);



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//     fullName: item.name + ' ' + item.surname,
//     id: item.id,
//     }));


// console.log(usersMapped[0].id) // 1
// console.log(usersMapped) // Вася Пупкин


// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя


// function getAverageAge(users) {
//     let result = users.reduce((sum, user) => {
//         return sum + user.age;
//     }, 0)
//     return result/users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr))


// function unique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(i, 1);
//                 i--;
//                 j--;
//             }
//         }
//     }
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// unique(strings);

// console.log(strings);



// function groupById(arr) {
//     return arr.reduce((item, val) => {
//         item[val.id] = val;
//         return item;
//     }, {})
// }

// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

// console.log(usersById);


// *Написать функцию - мемоизатор для функции fn

// const memo = (func) => {
//     let temp = 0;
//     return (a) => {
//         if (temp != a) {
//             temp = a;
//             return func(a);
//         }
//         else return temp * temp;
//     };
// }

// const fn = (a) => {
//     console.log("Function called")
//     return a * a
// }


// let memozed = memo(fn)

// console.log(memozed(4)) // Function called
// memozed = memo(fn);
//                         // 16
// console.log(memozed(4)) // 16
// console.log(memozed(4)) // 16
// console.log(memozed(5)) // Function called
//                         // 25
// console.log(memozed(5)) // 25


// function canGetCount(n) {
//     let temp = n;
//     return () => {
//         if (temp) {
//             temp--;
//             return 'yes'
//         }
//         else return 'no';
//     }
// }

// const getOne = canGetCount(2);

// console.log(getOne() === 'yes');
// console.log(getOne() === 'yes');
// console.log(getOne() === 'no');



// function multiply(num1, num2) {
//     if (typeof num1 != 'undefined' && typeof num2 != 'undefined') {
//         return num1 * num2;
//     }
//     else return (num2) => num1 * num2;
// }

// console.log(multiply(4, 5)); // => 20
// console.log(multiply(3, 3)); // => 9
// const double = multiply(10);
// console.log(double)
// console.log(double(5));  // => 10
// console.log(double(11)); // => 22


// function deleteNth(arr, n) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.find(item => item === arr[i])) {
//             let count = result.reduce((sum, item) => {
//                 if (item === arr[i]) return sum + 1;
//                 else return sum;
//             }, 0);
//             if (count < n) result.push(arr[i]);
//         }
//         else result.push(arr[i]);
//     }
//     return result;
// }

// let arr = [1, 2, 3, 1, 2, 1, 2, 3];

// console.log(deleteNth(arr, 3))


// function findEvenIndex(arr) {
//     let result = [];
//     let leftSum = 0;
//     let rightSum = arr.reduce((sum, item) => sum + item, 0);
//     arr.forEach((item, index) => {
//         if (index !== 0) {
//             leftSum += item;
//             if (leftSum === rightSum) result.push(index);
//             else rightSum -= item;
//         }
//         else {
//             rightSum -= item;
//             if (leftSum === rightSum) {
//                 result.push(index);
//             };
//             leftSum += item;
//         };
//     })
//     if (typeof result[0] !== 'undefined') return result[0];
//     else return -1;
// }

// console.log(findEvenIndex([0, 0, 0, 0, 0]))


// function aclean(arr) {
//     let result;
//     let set = new Set();
//     arr.forEach(item => {
//         let array = item.split('').toLowerCase();

//     })
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr));

// let map = new Map();

// map.set("name", "John");

// let keys = [];
// for (obj of map.keys()) keys.push(obj)

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// console.log(keys)




// ДЕСТРУКТУРИЗАЦИЯ - распаковка объекта, либо array, set, map в переменные

// 1.
// let user = {
//     name: 'John',
//     years: 30
// }

// let { name, years: age, isAdmin = false } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// 2.
// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250
// }

// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;

//     for (const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }

//     return maxName;
// }


// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250
// }

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary
//     }
//     return sum;
// }

// console.log(sumSalaries(salaries))



// function factorial(n) {
//     if (n == 1) return 1;
//     else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));




// function spinWords(string) {
//     return string.split(' ').map(item => {
//         if (item.length >= 5) {
//             return [...item].reverse().join('');
//         }
//         else return item;
//     }).join(' ');
// }

// console.log(spinWords("Hey wollef sroirraw"));


// function queueTime(customers, n) {
//     let arr = [];

//     for (let i = 0; i < n; i++) arr.push(0);
//     customers.forEach(item => {
//         arr[arr.indexOf(Math.min(...arr))] = Math.min(...arr) + item;
//     })

//     return Math.max(...arr);
// }

// console.log(queueTime([7, 2, 5, 1, 6], 3))



// let worker = {
//     slow(min, max) {
//         alert(`Called with ${min},${max}`);
//         return min + max;
//     }
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();
//     return function (...arg) {
//         let key = hash(arg); // (*)
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.call(this, ...arg); // (**)

//         cache.set(key, result);
//         return result;
//     };
// }

// function hash(args) {
//     return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// alert(worker.slow(3, 5)); // работает
// alert("Again " + worker.slow(3, 5)); // аналогично (из кеша)


// БИНАРНЫЙ ПОИСК
// function binarySearch(sortedArray, key) {
//     let start = 0;
//     let end = sortedArray.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (sortedArray[middle] === key) {
//             return middle;
//         }

//         else if (sortedArray[middle] < key) {
//             start = middle + 1;
//         }

//         else {
//             end = middle - 1;
//         }
//     }

//     return -1;
// }



// function sayHi() {
//     alert('Hello world');
// }

// let delay = 1000;

// let timer = setTimeout('console.log("jghj")', 1000)
// let timerId = setTimeout(function request() {
//     alert(delay)
//     delay *= 2;
//     timerId = setTimeout(request, delay)
// }, delay)

// alert(timerId)

// function Func(array) {
//     this.arr = array
//     this.sortId = function () {
//         return array.sort((a, b) => a.id - b.id);
//     }
// }

// let obj = new Func([{ id: 2 }, { id: 3 }, { id: 1 }])
// Object.defineProperty(obj, 'arr', {
//     writable: false
// })

// console.log(obj.sortId())
// obj.arr = 1
// console.log(obj)



// function printNumbers(from, to) {
//     let current = from;
//     let timeId = setInterval(function () {
//         alert(current);
//         if (current === to) clearInterval(timeId);
//         current++;
//     }, 1000);
// }

// function printNumbers(from, to) {
//     let current = from;
//     setTimeout(function go() {
//         alert(current);
//         if (current < to) setTimeout(go, 1000);
//         current++;
//     }, 1000)
// }

// printNumbers(1, 7);

// let user = {
//     firstName: "John",
//     say(time, phrase) {
//         alert(`[${time}] ${this.firstName}: ${phrase}!`);
//     }
// };

// // добавляем частично применённый метод с фиксированным временем
// user.sayNow = user.say.bind(this, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow("Hello");
// Что-то вроде этого:
// [10:00] John: Hello!


// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     login(result) {
//         alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?