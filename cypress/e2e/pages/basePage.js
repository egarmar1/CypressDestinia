class BasePage {
    constructor() {
        beforeEach(() => {
            cy.intercept('POST', 'https://stats.g.doubleclick.net/j/collect*', (req) => {
                req.reply({
                    statusCode: 200,
                    body: 'Request stubbed',
                });
            });
            cy.intercept('GET', 'https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=destinia.com', (req) => {
                req.reply({
                    statusCode: 204, // No Content
                    body: '',
                });
            }).as('blockedGetRequest');
            cy.intercept('POST', 'https://app.getsentry.com/api/63436/envelope/*', (req) => {
                req.reply({
                    statusCode: 200,
                    body: 'Request intercepted',
                });
            }).as('sentryRequest');

        });
    }

}

export default BasePage;