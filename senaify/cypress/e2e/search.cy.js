describe('template spec', () => {
  let musicaItem;

  //before é uma configuração
  before(() => {
    cy.visit('/')

  })

  it('Redirecionar para a tela de busca', () => {
    cy.get("[href='/Search']").click()
    cy.scrollTo('top')


  })

  it('Procurando uma musica especifica', () => {
    cy.get("[data-testid='campoBusca']").type('Bero')

    // cy.wait(2000)
    // cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0).eq(2).click()
    // cy.scrollTo('top')



    // MANEIRA MAIS OTIMIZADA DE FAZER
    // cy.get("[aria-label='music-item']").contains("Funk of Galáctico").click()

    
    cy.wait(1500)
    musicaItem = cy.get("[aria-label='music-item']").contains("Bero").first()
    musicaItem.click()

    it("Clicar em curtir musica", () => {
      cy.get(musicaItem).get("[data-testid='icon-button']").first().click()
  
    })

  })
})
