class User {
  //поле
  name: string; //public
  private isTeacher: boolean | undefined;
  protected age: number = 30;
  // public job: string | undefined; чтобы наи не писать это все, делаем следующее

  //когда пишем модификатор в конструкторе, это значит, что компилятор должен создать поле (переменную) в классе и соотвественно присвоить значение передаваемое конструктору

  constructor(name: string, public job: string) {
    this.name = name;
    this.job = job;
  }

  getAge(): number {
    return this.age;
  }

  //возможность менять значения у приватных полей
  public setTitle(title: boolean) {
    console.log(this.isTeacher);        
    this.isTeacher = title;
    console.log(this.isTeacher);    
  }
 
}

const user = new User('WFM', 'Backend');
console.log(user);
console.log(user.getAge());


