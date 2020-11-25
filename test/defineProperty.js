const object = {};
Object.defineProperty(object, 'property', {
  value: 42,
  writable: false
});

object.property = 77;            
// console.log(object.property);

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

obj.property1 = false
obj.property2 ='world'
console.log(obj)  // {property1: true, property2: "Hello"}