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
// src/index.ts
const createListing_1 = __importDefault(require("./createListing"));
const createOffer_1 = __importDefault(require("./createOffer"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("STARTED");
    console.log("STARTED");
    console.log("STARTED");
    // Run the specific method based on command line arguments or any other logic
    const command = process.argv[2];
    switch (command) {
        case 'createListing':
            yield (0, createListing_1.default)();
            break;
        case 'createOffer':
            yield (0, createOffer_1.default)(); // Corrected: Invoke the function
            break;
        default:
            console.log('Invalid command. Use "createListing", "createOffer"');
    }
});
main();
