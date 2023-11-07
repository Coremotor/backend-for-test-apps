import {FastifyReply} from 'fastify'
import {STANDARD} from "../helpers/constants";
import {handleServerError} from "../helpers/errors";

export const getUser = async (request: any, reply: FastifyReply) => {
    try {
        console.log('Ok')
        reply.code(STANDARD.SUCCESS).send({
            firstName: "Test",
            lastName: "User",
        })
    } catch (err) {
        handleServerError(reply, err)
    }
}