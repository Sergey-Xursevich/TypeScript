// /* Базовые типы и компиляция */
// // имя переменной : тип = значение
// let str: string = 'str';
// let num: number = 10;
// let bool: boolean = true;
// //before
// let unknow: any = '1';  //let unknow: string | number = '1';
// //after
// unknow = 1;
// /* Массивы */
// let numArray1: number[] = [1, 2, 3];
// let numArray2: Array<number> = [1, 2, 3];
// let strArray1: string[] = ['1', '2', '3'];
// let strArray2: Array<string> = ['1', '2', '3'];
// let boolArray1: boolean[] = [true, false];
// let boolArray2: Array<boolean> = [true, false];
// //tuples - тип для массива
// let array: [number, number, string] = [1, 2, '3'];
// let array2: [boolean, string, number] = [true, 'str', 22];
// /* Функции */
// const myName: string = 'WFM';
// const myAge: number = 50;
// function getMyName(): string {
//   return myName;
// }
// console.log(getMyName());
// function getMyAge(age: number, prefix: string = 'WFM - '): string {
//   return prefix + age;
// }
// console.log(getMyAge(40));
// function consoleLog(str: string): void {
//   console.log(str);  
// }
// console.log('Test string');
// let mySum: (num1: number, num2: number) => number;
// function sum(num1: number, num2: number): number {
//   return num1 + num2;
// } 
// mySum = sum;
// console.log(mySum(15, 10));
// /* Объект */
// type User = {name: string, age: number, getJobs: () => string[], jobs: string[], logName?: () => void}; //специльный объект с такими-то полями и типами
// let user: {name: string, age: number, getJobs: () => string[], jobs: string[], logName?: () => void} = {
//   name: 'WFM',
//   age: 50,
//   jobs: ['a', 'b'],
//   getJobs(): string[] {
//     return this.jobs;
//   },
//   logName(): void {
//     console.log(this.name);    
//   }
// };
// let user2: User = {
//   name: 'Max',
//   age: 30,
//   jobs: ['2'],
//   getJobs(): string[] {
//     return this.jobs;
//   },
//   logName(): void {
//     console.log(this.name);    
//   }
// }
// /* Специальные типы */
// enum Job {
//   Frontend,
//   Backend = 50,
//   Designer
// };
// const job: Job = Job.Backend;
// console.log(job); //50
// const job2: Job = Job.Designer;
// console.log(job2); //51
// //для функций которые выкидывают ошибки, они не заканчиваются и ничего не возвращают, поэтому void нельзя использовать, в таком случае применим never
// function throwNewError(err: string): never {
//   throw new Error(err);
// }
// let newVar;
// newVar = null;
// /*
// let myNumber = 20;
// myNumber = null; 
// будет ошибка, для того чтобы обнулить делаем вот так
// */
// let myNumber: number | null = 20;
// myNumber = null; 
