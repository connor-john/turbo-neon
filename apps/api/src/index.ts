import fastify from "fastify";
import { neon } from "neon-playground";

const server = fastify({
  logger: true,
});

const PORT = process.env.port || 8080;
server.listen(PORT, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("SERVER LISTENING AT PORT : " + PORT);
});

server.get("/", async (request, reply) => {
  return "health check";
});

server.get("/neon", async (request, reply) => {
  return neon.healthCheck();
});

server.register(require("fastify-healthcheck"));
