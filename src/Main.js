"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preact = require("preact");
exports.Hello = ({ name }) => (Preact.createElement("div", { class: "text-white mb-6" },
    Preact.createElement("div", { class: "text-4xl" },
        "Hello, ",
        name,
        "!"),
    Preact.createElement("div", { class: "text-lg" }, "- From TypeScript")));
