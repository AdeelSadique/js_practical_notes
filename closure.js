// in closure we pass only reference of child function
// when we returns child function it not only returns child but also parent and lexical scope

// function parent() {
//   const a = 'i am parent';
//   function child() {
//     console.log(a);
//   }
//   return child;
//   or
//   return function child() {
//     console.log(a);
//   };
// }

// we are passing reference of function
// const func = parent();
// func();

// now we will see the real world issue and their solution
// we will create html file with 2 button to change background color
// this method is working perfect but what happened if we multiple buttons so for that we will use function with lexical scope
// document.getElementById('green').onclick = function () {
//   document.body.style.backgroundColor = `green`;
// };
// document.getElementById('red').onclick = function () {
//   document.body.style.backgroundColor = `red`;
// };

// real world issues
// function clickHandler(color) {
//   document.body.style.backgroundColor = `${color}`;
// }
// document.getElementById('green').onclick = clickHandler('green');
// document.getElementById('red').onclick = clickHandler('red');

// solution of issues
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}
document.getElementById('green').onclick = clickHandler('green');
document.getElementById('red').onclick = clickHandler('red');
