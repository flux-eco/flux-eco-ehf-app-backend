#!/usr/bin/env node
import fs from "node:fs";
import {FluxEcoNodeHttpServer} from "./../../flux-eco-node-http-server/app/server/FluxEcoNodeHttpServer.mjs";
import Api from "./Api.mjs";

const readFile = (filePath) => {
    const httpServerConfigBuffer = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(httpServerConfigBuffer.toString());
}

async function app() {
    const config = readFile("./configs/flux-eco-ehf-app-backend-config.json");
    const api = Api.new(config)
    const serverSettings = readFile("./configs/flux-eco-node-http-server-config.json");
    const server = await FluxEcoNodeHttpServer.new(serverSettings, api);
    // Start the server
    server.start();
}
app();
