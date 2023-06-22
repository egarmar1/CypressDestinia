class BasePage {
    constructor() {
        beforeEach(() => {
            cy.window().then((win) => {
                const screenWidth = win.screen.width;
                const screenHeight = win.screen.height;
                cy.viewport(screenWidth, screenHeight);
            });

            cy.intercept(
                'https://stats.g.doubleclick.net/**/*',
                { middleware: true },
                (req) => {
                    req.on('before:response', (res) => {
                        // force all API responses to not be cached
                        res.headers['cache-control'] = 'no-store';
                    });
                    req.reply({
                        statusCode: 200,
                        body: 'Request stubbed',
                    });
                }
            );
            // cy.intercept(
            //     'https://consent.destinia.com/**',
            //     { middleware: true },
            //     (req) => {
            //         req.on('before:response', (res) => {
            //             // force all API responses to not be cached
            //             res.headers['cache-control'] = 'no-store';
            //         });
            //         req.reply({
            //             statusCode: 200,
            //             body: 'Request stubbed',
            //         });
            //     }
            // );

            // Other intercepts...
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

// class BasePage {
//     constructor() {
//         beforeEach(() => {
//             cy.window().then((win) => {
//                 const screenWidth = win.screen.width;
//                 const screenHeight = win.screen.height;
//                 cy.viewport(screenWidth, screenHeight);
//               });
              
//             cy.intercept('POST', 'https://stats.g.doubleclick.net/j/collect*', (req) => {
//                 req.reply({
//                     statusCode: 200,
//                     body: 'Request stubbed',
//                 });
//             });
//             cy.intercept('GET', 'https://securepubads.g.doubleclick.net/pagead/ppub_config?ippd=destinia.com', (req) => {
//                 req.reply({
//                     statusCode: 204, // No Content
//                     body: '',
//                 });
//             }).as('blockedGetRequest');
//             cy.intercept('POST', 'https://app.getsentry.com/api/63436/envelope/*', (req) => {
//                 req.reply({
//                     statusCode: 200,
//                     body: 'Request intercepted',
//                 });
//             }).as('sentryRequest');
//         });
//     }

// }

// export default BasePage;