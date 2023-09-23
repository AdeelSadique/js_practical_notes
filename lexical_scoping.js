// parent function cannot access child properties but child can access parent properties
// everything within curly braces is lexical scoping
function parent() {
  const msg = 'i am parent';

  function child() {
    console.log(msg);
  }
  child();
  console.log(msg);
}

parent();
