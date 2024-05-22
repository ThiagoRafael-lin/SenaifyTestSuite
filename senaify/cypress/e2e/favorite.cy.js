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

    cy.wait(1500)
    musicaItem = cy.get("[aria-label='music-item']").contains("Bero").first()
    musicaItem.click()
  })

  it("Clicar em curtir musica", () => {

    cy.wait(1500)
    cy.get(musicaItem).get("[data-testid='icon-button']").eq(0).click()

  })
})
