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

const { PORT=8080 } = process.env;
console.log(PORT);
//-----------------------------------------------------------------------------
// Server
//-----------------------------------------------------------------------------

fastify.get("/", async (request, reply) => {
    request.log.info("Responding to request");
    return "Hello world!";
});

(async () => {
    try {
        await fastify.listen(PORT);
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
})();
