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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const constants_1 = require("../helpers/constants");
const errors_1 = require("../helpers/errors");
const getUser = (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Ok');
        reply.code(constants_1.STANDARD.SUCCESS).send({
            firstName: "Test",
            lastName: "User",
        });
    }
    catch (err) {
        (0, errors_1.handleServerError)(reply, err);
    }
});
exports.getUser = getUser;
