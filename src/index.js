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
const HOST = "0.0.0.0";

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
