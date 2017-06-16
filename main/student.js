let Person = require('./person')
// Write your code here
module.exports = Student(n,a,k){
  Person.call(this,n,a);
  var klass=k;
  public var introduce(){
   return ("My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+klass);
}
}

