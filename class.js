var User = /** @class */ (function () {
    // public job: string | undefined; чтобы наи не писать это все, делаем следующее
    //когда пишем модификатор в конструкторе, это значит, что компилятор должен создать поле (переменную) в классе и соотвественно присвоить значение передаваемое конструктору
    function User(name, job) {
        this.job = job;
        this.age = 30;
        this.name = name;
        this.job = job;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    //возможность менять значения у приватных полей
    User.prototype.setTitle = function (title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
    };
    return User;
}());
var user = new User('WFM', 'Backend');
console.log(user);
console.log(user.getAge());
