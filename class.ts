// class User {
//   private isTeacher: boolean | undefined;
//   protected age: number = 30;

//   constructor(public name: string, public job: string) {
//     this.name = name;
//     this.job = job;
//   }

//   public getAge(): number {
//     return this.age;
//   } 
// }

// class WFM extends User {
//   constructor(job:string) {
//     //вызов родительского конструктора
//     super('WFM', job);
//     this.age = 100;
//   }
//   //ошибка, т.к. переопределять методы можем, но тип возвращаемого значения должен быть одним, то есть метод getAge (в наследнике и родителе) должен быть number
//   getAge(): number {
//     return 1 + this.age;
//   }
// }

// const user = new User('WFM', 'Backend');
// const wfm = new WFM('Backend');
// console.log(wfm);



// /* Абстрактный класс, от него нельзя создавать обьекты, они нужны только для наследования */
// abstract class Car {
//   model: string | undefined;
//   year: number = 2010;

//   abstract logInfo(info: string) : void;

//   getCarYear() : number {
//     return this.year;
//   }
// }

// class Audi extends Car {
//   logInfo(info: string) : void {
//     console.log(info);    
//   }
// }

// const car = new Audi();
// console.log(car);




