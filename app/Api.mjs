import https from "node:https";
import fs from "node:fs";

export default class Api {

    /**
     * @type {FluxEcoEhfAppBackendConfig}
     */
    #config;

    constructor(config) {
        this.#config = this.#resolveEnvVariables(config)
    }

    static new(config) {
        return new Api(config)
    }

    readTrainingSession({trainingArea}) {
        //todo query action from database
        const result = fs.readFileSync(`./data/training-sessions/${trainingArea}.json`);
        return JSON.parse(result.toString());
    }

    readTrainingDiary({userId, trainingSessionId}) {
        //todo query action from database
        const result = fs.readFileSync(`./data/user-data/${userId}/training-diaries/${trainingSessionId}.json`);
        return JSON.parse(result.toString());
    }

    readPlaytimeAnswer({userId, trainingSessionId}) {
        //todo query action from database
        const result = fs.readFileSync(`./data/user-data/${userId}/playtime-answers/${trainingSessionId}.json`);
        return JSON.parse(result.toString());
    }

    readTrainingAreas() {
        //todo query action from database
        const result = fs.readFileSync(`./data/training-areas.json`);
        return JSON.parse(result.toString());
    }

    readAmbassadorSessions() {
        //todo query action from database
        const result = fs.readFileSync(`./data/ambassador-sessions.json`);
        return JSON.parse(result.toString());
    }

    readUserProfil({userId}) {
        //todo query action from database
        const result = fs.readFileSync(`./data/user-data/${userId}/profil.json`);
        return JSON.parse(result.toString());
    }

    /**
     * @param {FluxEcoEhfAppBackendConfig|object} config
     * @returns {FluxEcoEhfAppBackendConfig|object}
     */
    #resolveEnvVariables(config) {
        if (config === null) {
            return config;
        }
        if (typeof config !== 'object') {
            return config;
        }
        const resolved = Array.isArray(config) ? [] : {};
        for (const [key, value] of Object.entries(config)) {
            if (typeof value === 'string' && value.startsWith('$')) {
                const envVar = value.slice(1);
                const envVarName = envVar.replace(/[{}]/g, '');
                resolved[key] = process.env[envVarName];
            } else {
                resolved[key] = this.#resolveEnvVariables(value);
            }
        }
        return resolved;
    }
}