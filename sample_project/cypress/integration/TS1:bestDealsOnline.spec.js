/// <reference types="cypress" />
const { selectors } = require("../selectors/selectors.json");

describe("verify the best Deals Online section", () => {
  before(() => {
    cy.visit("/");
  });

  it("verify the page navigate to home page ", () => {
    cy.title().should(
      "eq",
      "Online Shopping, Coupons & Discount Code at iprice Malaysia"
    );
  });

  it(" verify the 20 stores icons should appears", () => {
    cy.get(selectors.element.storeList).should("have.length", 20);
  });

  it("verify the Top Trending Products count and its contains the valid attribute”", () => {
    cy.get(selectors.element.trendingProductsList).should(
      "have.attr",
      "data-vars-cgt"
    );
  });
});
