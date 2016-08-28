describe("Directive test", function () {
  browser.get("http://localhost:8080");

  it("should properly display the labels", function () {
    var directive = element.all(by.css('user-profile'));

    expect(directive.get(0).getText()).toContain("Name:");
    expect(directive.get(0).getText()).toContain("Position:");
    expect(directive.get(0).getText()).toContain("Description:");
  });
});
