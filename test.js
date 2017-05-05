var jestAsyncDone = function(expects, done) {
  try {
    expects();
    done();
  } catch (e) {
    done.fail(e);
  }
}

it('should report diff', (done) => {
  jestAsyncDone(function () {
    expect({myObj: "A", name: "Apple"}).toEqual({myObj: "A", name: "Aardvark"});
  }, done)
})