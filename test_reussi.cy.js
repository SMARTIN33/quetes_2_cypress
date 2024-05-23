describe("Formualaire Blackmarket",()=>{

    it('visiter un site',function(){
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')
        cy.contains('Tout refuser').click()
        cy.get('#firstName')
            .type('Soizic')
            .should("have.value", "Soizic")
        cy.get('#lastName')
            .type('MARTIN')
            .should("have.value", "MARTIN")
        cy.get('#signup-email').type('soizic@gmail.com')
        cy.get('#signup-password').type('123Motdepass')
        cy.contains('J’accepte de recevoir les meilleurs plan du web et la newsletter par mail.').click()
        cy.contains("Enchantés !").click()


    })
})

