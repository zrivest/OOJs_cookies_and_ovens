describe("A cookieBatch", function() {
  beforeEach(function() {
    cookie = new CookieBatch('oatmeal', 10)
  });


  it("has a batch type", function() {
    expect(cookie.batchType).toBe('oatmeal');
  });

  it("has a batch time", function() {
    expect(cookie.bakeTime).toBe(10);
  });
});
