import fastify from 'fastify'
import userRouter from "./src/routes/user.router";
import cors from '@fastify/cors'

const server = fastify({
    logger: true,
})

server.get('/api', (request, reply) => {
    reply.send({name: 'for test apps api'})
})

server.register(cors, {
    origin: '*',
    methods: ['GET']
})
server.register(userRouter, {prefix: '/api/user'})

const start = async () => {
    try {
        await server.listen({port: 1234})
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
void start()