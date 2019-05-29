// //описываем прверку на сущность, если она имеет поле length, то Ok иначе false
// function getLength(variable: any ):void {
//   console.log(variable.length);  
// }

// getLength([1,2,3]); //3

// const box = {
//   name: 'WFM',
//   length: 20
// };

// getLength(box); //20

// const box1 = {
//   name: 'WFM',
//   boxLength: 20
// };

// getLength(box1); //undefined

// //чтобы избежать undefined, делаем следующее, описываем прверку на сущность, если она имеет поле length, то Ok иначе false Суть интерфейсов, создание обязательных и необязательный полей, 
// function getLength(variable: {length: number} ):void {
//   console.log(variable.length);  
// }

// const box2 = {
//   name: 'WFM',
//   length: 20
// };

// getLength(box2); //20


// /* ----- */

// interface ILength {
//   length: number;
// }

// function getLength(variable:ILength ):void {
//   console.log(variable.length);  
// }




interface IUser {
  name: string;
  age?: number;
  logInfo(info: string):void;
};

interface IGetYear {
  getYear(): number;
}

// const user: IUser = {
//   name: 'WFM',
//   age: 20,
//   logInfo(info) {
//     console.log(info);    
//   }
// };

class User implements IUser, IGetYear {
  name:string = 'WFM';
  logInfo(info:string) : void {
    console.log(info);    
  }

  getYear() : number {
    return 200;
  }
}
