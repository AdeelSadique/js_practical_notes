// generators are used to run different functionalites on every call
function* chai(name) {
  console.log(`welcome mr/mrs ${name}`);
  yield 'moving to next step...';
  console.log(`processing...`);
  yield 'moving to next step...';
  console.log(`finished`);
  yield;
  return 'processing completed';
}

const gen = chai('adeel');

console.log(gen.next());
