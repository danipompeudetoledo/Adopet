describe('Pagina de login',() => {

        beforeEach(()=>{
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
            cy.get('[data-test="login-button"]').click();
    
        })
    it("Deve preencher o campo de login incorretamente",()=>{
        cy.get('[data-test="input-loginEmail"]').type('a@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })

    it("Deve preencher o campo de login incorretamente",()=>{
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Enha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
        //cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })

})
