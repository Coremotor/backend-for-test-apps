import {FastifyInstance} from 'fastify'
import {getUser} from "../controllers/user.controller";

async function userRouter(fastify: FastifyInstance) {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: getUser,
    })
}

export default userRouter