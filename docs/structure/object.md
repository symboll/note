# Object
## Interview
### isEmptyObject [空对象判断]
```js
const isEmpty = obj => {
  return Object.keys(obj).length > 0 ? true : false
}

const isEmpty = obj => {
  return Reflect.ownKeys(obj).length > 0 ? true : false
}

const isEmpty = obj => {
  return JSON.stringify(obj) === '{}' ? true: false
}

const isEmpty = obj => {
  for(let key in obj) {
    return false
  }
  return true
}
```
## methods
```js
Object.is()
Object.create()
Object.assign()

Object.defineProperty()
Object.defineProperties()

Object.setPrototypeOf()
Object.getPrototypeOf()

Object.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptors()

Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()

Object.seal()
Object.isSealed()
Object.preventExtensions()
Object.isExtensible()
Object.freeze()
Object.isFrozen()

Object.fromEntries()
Object.keys()
Object.entries()
Object.values()

Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()
Object.prototype.propertyIsEnumerable()
Object.prototype.toLocaleString()
Object.prototype.toString()
Object.prototype.valueOf()
```
### Object.is
`Object.is()`方法判断两个值是否为同一个值。
```js
Object.is(value1, value2)
```
`返回值:` Boolean
#### Example
```js
Object.is(window.NaN, NaN)   // true
Object.is(NaN, 0/0);         // true

Object.is(0, -0);            // false
0 === -0                     // true
```
#### Object.is 与 == 运算不同。 
== 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 "" == false 判断为 true),
而 Object.is不会强制转换两边的值。

#### Object.is 与 === 运算也不相同。
=== 运算符 (也包括 == 运算符) 将数字 -0 和 +0 视为相等 ，而将Number.NaN 与NaN视为不相等.

### Object.create
`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
```js
Object.create(proto,[propertiesObject])
```

`proto:` 新创建对象的原型对象。 </br>
`propertiesObject:`  可选。需要传入一个对象，该对象的属性类型参照`Object.defineProperties()`的第二个参数。如果该参数被指定且不为`undefined`，该传入对象的自有可枚举属性(即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符。 </br>
`返回值: ` 一个新对象，带着指定的原型对象和属性。</br>
::: danger
如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常
:::

#### Example
```js
let obj = {};
// 以字面量方式创建的空对象就相当于:
obj = Object.create(Object.prototype);

function Constructor(){}
let obj = new Constructor();
// 上面的一句就相当于:
obj = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码

// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })
// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p              //42
o.q = 12
for (var prop in o) {
   console.log(prop)
}               //"q"
delete o.p      //false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42, 
    writable: true,
    enumerable: true,
    configurable: true 
  } 
});
```
#### 实现单继承
```js
function Parent(name) { this.name = name}
Parent.prototype.say = function() {
  console.info('say ===>.');
};
function Child(name) {
  Parent.call(this, name); 
}
// 子类续承父类
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child('zhangsan');
```

#### 实现多继承
```js
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
```
### Object.assign
`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
```js
Object.assign(target, ...sources)
```
`target:`目标对象。 <br />
`sources:` 源对象。 <br />
`返回值:`目标对象。

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

returnedTarget === target  // true
```

`Object.assign`方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的`[[Get]]`和目标对象的`[[Set]]`，所以它会调用相关`getter`和`setter`。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用`Object.getOwnPropertyDescriptor()`和`Object.defineProperty()` 。

::: warning
Object.assign 不会在那些source对象值为 null 或 undefined 的时候抛出错误。
:::
#### Example
#### String类型和 Symbol 类型的属性都会被拷贝。
```js
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj);                  // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```
#### 继承属性和不可枚举属性不能拷贝
```js
const obj = Object.create({foo: 1}, { // foo 是个继承属性。
  bar: {
    value: 2  // bar 是个不可枚举属性。
  },
  baz: {
    value: 3,
    enumerable: true  // baz 是个自身可枚举属性。
  }
});
const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```
#### 原始类型会被包装为对象
```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo")
const obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```
#### 异常会打断后续拷贝任务
```js
const target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
}); // target 的 foo 属性是个只读属性。
Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: "foo" is read-only
// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。
console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。
```
#### 拷贝访问器
```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

let copy = Object.assign({}, obj); 
console.log(copy); // { foo: 1, bar: 2 } copy.bar的值来自obj.bar的getter函数的返回值

// 下面这个函数会拷贝所有自有属性的属性描述符
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // Object.assign 默认也会拷贝可枚举的Symbols
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```
### Object.defineProperty & Object.defineProperties
|           | defineProperty      | defineProperties  |
| --------: |:---------------------:| :---------------------:|
|   定义     | 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。 | 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。 |
|   语法     | Object.defineProperty(obj, prop, descriptor)      |   Object.defineProperties(obj, props) |
|   obj     | 要定义属性的对象。|  |
|   prop    | 要定义或修改的属性的名称或 Symbol 。|  |
|   props   | | 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符 |
| descriptor|要定义或修改的属性描述符。|  |

```js
const object = {};
Object.defineProperty(object, 'property', {
  value: 42,
  writable: false
});

object.property = 77;            
console.log(object.property);    //  42 


const obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});

obj.property2 ='world'
console.log(obj)        // {property1: true, property2: "Hello"}
```
|           | 数据描述符      | 存取描述符  |
| --------: |:---------------------:| :---------------------:|
|   定义     | 据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。 | 存取描述符是由 getter 函数和 setter 函数所描述的属性。 |
|   configurable     |  |  |
|   enumerable     |  |  |
|   writable     |  | 无 |
|   value     |  | 无 |
|   get     | 无 |  |
|   set     | 无 |  |

`configurable`:当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 <br />
`enumerable`: 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。<br />
`value`: 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。<br />
`writable`: 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。<br />
`get`: 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。<br />
`set`: 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。<br />

```js
var obj = {};
var descriptor = Object.create(null); // 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// 等同于下面 显式 定义
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});
```
### Object.setPrototypeOf & Object.getPrototypeOf
### Object.getOwnPropertyDescriptor & Object.getOwnPropertyDescriptors
### Object.getOwnPropertyNames & Object.getOwnPropertySymbols
### Object.seal & Object.isSealed
### Object.preventExtensions & Object.isExtensible
### Object.freeze & Object.isFrozen
### Object.fromEntries
### Object.keys & Object.values & Object.entries