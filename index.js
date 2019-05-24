/* Базовые типы и компиляция */
// имя переменной : тип = значение
var str = 'str';
var num = 10;
var bool = true;
//before
var unknow = '1'; //let unknow: string | number = '1';
//after
unknow = 1;
/* Массивы */
var numArray1 = [1, 2, 3];
var numArray2 = [1, 2, 3];
var strArray1 = ['1', '2', '3'];
var strArray2 = ['1', '2', '3'];
var boolArray1 = [true, false];
var boolArray2 = [true, false];
//tuples - тип для массива
var array = [1, 2, '3'];
var array2 = [true, 'str', 22];
/* Функции */
var myName = 'WFM';
var myAge = 50;
function getMyName() {
    return myName;
}
console.log(getMyName());
function getMyAge(age, prefix) {
    if (prefix === void 0) { prefix = 'WFM - '; }
    return prefix + age;
}
console.log(getMyAge(40));
function consoleLog(str) {
    console.log(str);
}
console.log('Test string');
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(15, 10));
