let Person = require('./person')
// Write your code here
module.exports = Student(name,age,grade){
  Person.call(this,name,age);
  this.grade=grade;
  console.log("My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+grade);
}
