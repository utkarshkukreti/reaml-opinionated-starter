"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preact = require("preact");
exports.Hello = ({ name }) => (Preact.createElement("div", { class: "text-white mb-8 transition duration-300 transform hover:skew-x-6 hover:scale-110 cursor-pointer" },
    Preact.createElement("div", { class: "text-4xl" },
        "Hello, ",
        name,
        "!"),
    Preact.createElement("div", { class: "text-lg" }, "- From TypeScript")));
