// CASO-1
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário está na página inicial do site Advantage Online Shopping', () => {
  cy.visit('https://www.advantageonlineshopping.com/');
});

When('o usuário clica na lupa e digita {string} no campo de busca', (productName) => {
  cy.get('#mobileSearch > .roboto-medium').click().type(`${productName}{enter}`);
});

Then('o sistema deve exibir uma lista de produtos relacionados ao termo {string}', (productName) => {
  cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope').should('contain', productName); 
});

Then('a lista deve conter produtos com o nome exato {string} no título ou descrição', (productName) => {
  cy.get('[data-ng-show="([] | productsFilterForCategoriesProduct:searchResult:minPriceToFilter:maxPriceToFilter:productsInclude).length != 0"] > ul > li.ng-scope').should('contain.text', productName);
  });
