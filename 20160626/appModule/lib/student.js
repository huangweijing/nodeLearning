var Student = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function(){
    console.log(this.name);
  }
  this.showAge = function(){
    console.log(this.age);
  }
}

exports.Student = Student;
