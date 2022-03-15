it('works', () => {
   expect(42).to.equal(21 + 21);
   cy.visit('aaditkamat.com').then(() => {
        expect('hello').to.equal('hello');
   });
})