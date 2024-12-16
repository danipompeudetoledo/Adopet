describe('Página de Cadastro', () => {
  it('Deve preencher os campos de formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();

      // Aguarda o campo de nome aparecer antes de interagir
      cy.get('#name').should('be.visible').type('Ana de Jesus');
      cy.get('#email').type('danilodias.1020@gmail.com');
      cy.get('[data-test="input-name"]').type('Senha123');
      cy.get('[data-test="input-password"]').type('Senha123');
      
  
      cy.get('[data-test="submit-button"]').should('be.visible').wait(500).click();
    });

    it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('.header__home').click()  

  })
  });
