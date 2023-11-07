"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const pino_1 = __importDefault(require("pino"));
const user_router_1 = __importDefault(require("./src/routes/user.router"));
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)({
    logger: (0, pino_1.default)({ level: 'info' }),
});
server.get('/api', (request, reply) => {
    reply.send({ name: 'for test apps api' });
});
server.register(cors_1.default);
server.register(user_router_1.default, { prefix: '/api/user' });
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen({ port: 1234 });
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
});
void start();
