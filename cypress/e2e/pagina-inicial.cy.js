describe('Teste na pagina principal',() => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')

    })
    it('Validar se o title com o texto “AdoPet” está presente no html ',()=>{
        cy.title('eq','AdoPet')

    })

    it('Verificar um texto',()=>{
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')

    })

    it('login Alternativo',()=>{
        cy.get('.header__message').click()
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();

    })
        
})