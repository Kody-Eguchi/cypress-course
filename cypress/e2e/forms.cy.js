describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("example@test.com");
    cy.contains(/Successfully subbed: example@test.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: example@test.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: example@test.com!/i).should("not.exist");

    cy.get("@subscribe-input").type("example@test.io");
    cy.contains(/invalid email: example@test.io!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid email: example@test.io!/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid email: example@test.io!/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
