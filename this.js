// this return only current object content
// const obj = {
//   name: 'adeel',
//   getname: function () {
//     console.log(this.name);
//   },
// };
// obj.getname();
// obj.name = 'changed';
// obj.getname();

// function name(params) {
// we cannot use this.name here it returns undefined
// const name = 'some';
// this returns global system information
//   console.log(this);
// }

// const name2 = (params) => {
// we cannot use this.name here it returns undefined
// const name = 'some';
// this undefined
//   console.log(this);
// };

const obj = {
  name: 'adeel',
  price: 100,
};

// console.log(Object.getOwnPropertyDescriptors(obj));
console.log(obj.name);
Object.defineProperties(obj, {
  name: { enumerable: false, writable: false, configurable: false },
  price: { enumerable: false, writable: false, configurable: false },
});
obj.name = 'changed';
console.log(obj.name);
// console.log(Object.getOwnPropertyDescriptors(obj));

// for (let key of Object.entries(obj)) {
//   console.log(key);
// }
