function receivesAFunction(callback) {
  callback();
}
  const spy = chai.spy();
  receivesAFunction(spy);

  function returnsANamedFunction() {
    return function namedFunction(){};
    var fn;
    fn = returnsANamedFunction();
  }
  function returnsAnAnonymousFunction() {
    return function () {}
    var fn;
    fn = returnsAnAnonymousFunction();
  }
