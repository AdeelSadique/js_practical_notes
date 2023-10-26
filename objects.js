// objects has some hidden properties
// so we can restrict object to change or iterate
// MATH.PI has static value but we can change
// functions in objetcs are not iteratable
let obj = {
  name: 'chai',
  price: 100,
};
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

for (let value of Object.entries(obj)) {
  console.log(value);
}
// here we restricted the obj.name value to change and iterate
Object.defineProperty(obj, 'name', { writable: false, enumerable: false });
// i tried to change value but value not changed
obj.name = 'new';
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
for (let value of Object.entries(obj)) {
  console.log(value);
}
