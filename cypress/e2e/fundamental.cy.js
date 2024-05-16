describe("Fundamental test", () => {
  it("Contains correct header text", () => {
    cy.visit("/fundamentals");
    cy.get('[data-test="fundamental-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
});
