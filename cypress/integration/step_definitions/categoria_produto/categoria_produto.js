import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário está na página inicial do site Advantage Online Shopping', () => {
    cy.visit('https://www.advantageonlineshopping.com/');
    
  });
  
  When('o usuário digita {string} no campo de busca e clica na lupa', (productName) => {
    cy.get('#mobileSearch > .roboto-medium').click().type(`${productName}{enter}`);
  });
  
  
  Then('o sistema apresenta os produtos com esse nome disponivel', (productName) => {
    cy.get('ul > li.ng-scope', { timeout: 10000 }) // Seleciona diretamente os itens da lista
      .should('be.visible') // Garante que o elemento está visível
      .should('contain.text', productName); // Verifica se o nome do produto está presente
  });
  
  
