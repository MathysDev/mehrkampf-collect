
var startnr: number;
var user: string = '';
describe('Startup', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Signin')
  })
})



describe('Basic Tests', () => {

  beforeEach(() => {
    // Preserve local storage between tests
    
   
    cy.window().then((win) => {
      if (user !== '') {
        win.localStorage.setItem('user', user);
      }
    })
  
 
  });
  it('Logs in to the application', () => {
    cy.visit('/login'); // replace with your login page URL

    // replace 'input[name="username"]' and 'input[name="password"]' with your actual username and password input selectors
    cy.get('input[name="username"]').type(Cypress.env('testUser1ID'));
    cy.get('input[name="password"]').type(Cypress.env('testUser1PW'));

    // replace 'button[type="submit"]' with your actual login button selector
    cy.get('input[name="signin"]').click();
    cy.url().should('include', '/start');
   
    cy.window().then((win) => {
      user = win.localStorage.getItem('user')??'';
      console.log(user)
      cy.log('user:' + user)
       });
    
  });
  it('Shows List', () => {
    cy.visit('/start'); // replace with your login page URL
    // check that we have logged in successfully
    cy.contains('Liste anzeigen')
    cy.get('button[name="list"]').click();
    cy.url().should('include', '/list');
    cy.contains('StartNr.');
    
  });
  it('Click first record and verify Laufzettel', () => {
    cy.visit('/list');
    
    cy.get('tbody > tr > td').first().then(($td) => {
      const value = $td.text();
      cy.get('tbody > tr').first().click();
      cy.contains(value)
    });
    
  });
  it('Edit first Laufzettel und Resultat prüfen', () => {
    cy.visit('/list');

    cy.get('tbody > tr > td:nth-child(4)').first().then(($td) => {
      const value: number = Number($td.text()) + 1;
      cy.get('tbody > tr').first().click();
      cy.get('input[name="Wertung1"]').clear();
      cy.get('input[name="Wertung1"]').clear();
      cy.get('input[name="Wertung1"]').type(value.toString());
      cy.get('button[name="submit"]').click();
      cy.get('tbody > tr > td:nth-child(4)').first().then(($td2) => {
        expect($td2.text()).to.equal(value.toString());
        
      });
    });
    cy.get('tbody > tr > td:nth-child(1)').first().then(($td) => {
      
       startnr = Number($td.text()) ;
      cy.log('StartNr:' + startnr)
    });
  });

  it('Laufzettel direkt aufrufen', () => {
    cy.visit('/start');
    
    cy.get('input[name="startnr"]').type(startnr.toString());
    cy.get('button[name="Laufzettel"]').click();
    cy.url().should('include', startnr.toString());
    cy.contains(startnr.toString())
    cy.get('button[name="cancel"]').click();
  });
});