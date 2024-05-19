describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").type("example@test.com");
    cy.contains(/Successfully subbed: example@test.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: example@test.com!/i).should("exist");
  });
});
