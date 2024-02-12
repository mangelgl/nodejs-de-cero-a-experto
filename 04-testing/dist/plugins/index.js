"use strict";
/**
 * ! Patrones Adaptadores
 * A la hora de trabajar con dependencias de terceros, debemos trabajar
 * con Patrones Adaptadores, una capa adicional para que nuestro código
 * no dependa directamente del código de terceros y sea más fácil de modificar.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.http = exports.getAge = exports.getUUID = void 0;
var get_id_plugin_1 = require("../plugins/get-id-plugin");
Object.defineProperty(exports, "getUUID", { enumerable: true, get: function () { return get_id_plugin_1.getUUID; } });
var get_age_plugin_1 = require("../plugins/get-age-plugin");
Object.defineProperty(exports, "getAge", { enumerable: true, get: function () { return get_age_plugin_1.getAge; } });
var http_client_plugin_1 = require("../plugins/http-client-plugin");
Object.defineProperty(exports, "http", { enumerable: true, get: function () { return http_client_plugin_1.httpClientPlugin; } });
var logger_plugin_1 = require("../plugins/logger.plugin");
Object.defineProperty(exports, "buildLogger", { enumerable: true, get: function () { return logger_plugin_1.buildLogger; } });
