let Person = require('./person')
// Write your code here
module.exports = Student(name,age,klass){
  Person.call(this,name,age);
  this.klass=klass;
}
public var introduce(){
 return ("My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+klass);
}
