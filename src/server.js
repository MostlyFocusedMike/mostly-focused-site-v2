const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Path = require('path');

// create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: process.env.PORT || 8000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, '..', 'build'),
        },
    },
});


// define server start function
const launch = async () => {
    try {
        await server.register([
            Inert,
        ]);

        // add each route
        server.route([
            {
                method: 'GET',
                path: '/{param*}',
                options: {
                    description: 'Static asset delivery directory',
                    notes: "This route uses hapi's Inert plugin to serve static content, mainly the actual build html file",
                    handler: {
                        directory: {
                            path: '.',
                            redirectToSlash: true,
                        },
                    },
                },
            },
            {
                method: 'GET',
                path: '/articles',
                options: {
                    description: 'Redirect old url to homepage for now',
                    notes: "This should be temporary, since the homepage likely won't always be articles",
                    handler: async (req, h) => {
                        return h.redirect('/');
                    }
                },
            }
        ]);

        await server.start(); // the builtin server.start method is async
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log(`Server running at ${server.info.uri}`);
};

// start your server
launch();
