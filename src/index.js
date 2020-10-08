/**
 * @fileoverview Simple Fastify server
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const fastify = require('fastify')({ logger: true })

//-----------------------------------------------------------------------------
// Setup
//-----------------------------------------------------------------------------

const { PORT=8080, K_SERVICE } = process.env;

/*
 * Cloud Run exposes a K_SERVICE environment variable. So, I'm using that to
 * determine when the server is running in Cloud Run vs. running in a dev
 * environment. Cloud Run needs to listen on 0.0.0.0 but in a dev environment
 * it's a lot to easier to work with 127.0.0.1.
 */
const HOST = K_SERVICE ? "0.0.0.0" : "127.0.0.1";

//-----------------------------------------------------------------------------
// Server
//-----------------------------------------------------------------------------

fastify.get("/", async (request, reply) => {
    request.log.info("Responding to request");
    return "Hello world!";
});

(async () => {
    try {
        await fastify.listen(PORT, HOST);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
        if (K_SERVICE) {
            fastify.log.info(`Running on service ${ K_SERVICE }`);
        }
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
})();
