describe('template spec', () => {
  let musicaItem;

  //before é uma configuração
  before(() => {
    cy.visit('/')

  })

  it('Redirecionar para a tela de busca', () => {
    cy.get("[href='/Favorites']").click()
    cy.scrollTo('top')

  })

  it('Procurando uma musica especifica', () => {
    cy.wait(1500)
    musicaItem = cy.get("[aria-label='musicaFav']").contains("Bero").first().click()
    cy.scrollTo('top')
  })


})