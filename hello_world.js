var myFunction = function(inputs) {
	console.log("Hello, World!");
}

describe ("hello", function() {
  it("should say 'Hello Steve Jobs'", function() {
    expect(hello("Steve", "Jobs")).to.equal("Hello Steve Jobs");
  });
});

