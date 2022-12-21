const fastify = require("fastify")({ logger: true });

fastify.register(require("@fastify/swagger"));

fastify.register(require("@fastify/swagger-ui"), {
  exposeRoute: true,
  routePrefix: "/docs",
});
fastify.register(require("./routes/items"), { prefix: "/api/v1/items" });

const PORT = 3000;

const start = async () => {
  try {
    await fastify.listen({ port: PORT });

    await fastify.ready();
    fastify.swagger();
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
