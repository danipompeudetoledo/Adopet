describe('Página de Cadastro', () => {
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');

    })
    it('preencher os campos de formulario incorretamente e exibir mensagens ao usuario', () => {
        
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="submit-button"]').should('be.visible').wait(500).click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    });

   
});
