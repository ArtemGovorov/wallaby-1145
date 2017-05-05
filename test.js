it('should report diff', () => {
  expect({myObj: "A", name: "Apple"}).toEqual({myObj: "A", name: "Aardvark"});
})