function Father (name){ this.name = name}
function Mother (age) { this.age = age}

Father.prototype.getName = function () {
  console.log(`name is ${this.name}`)
}

Mother.prototype.getAge = function () {
  console.log(`age is ${this.age}`)
}

function Child(name, age) {
  Father.call(this, name);
  Mother.call(this, age);
}
// 继承一个类
Child.prototype = Object.create(Father.prototype);
// 混合其它
Object.assign(Child.prototype, Mother.prototype);
// 重新指定constructor
Child.prototype.constructor = Child;

Child.prototype.run = function() {
  console.log('run ===> .')
};

const child = new Child('zhangsan',18);

console.log(child)

child.getName()