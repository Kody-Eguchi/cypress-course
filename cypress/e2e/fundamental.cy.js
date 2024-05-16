describe("Fundamental test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001/fundamentals");
    cy.get('[data-test="fundamental-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
});
