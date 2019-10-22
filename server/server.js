"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const errorHandler = require("errorhandler");
const mongoose = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const hero_1 = require("./api/hero");
/**
 * The server.
 *
 * @class Server
 */
class Server {
    /**
     * Bootstrap the application.
     * @static
     */
    static bootstrap() {
        return new Server();
    }
    /**
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
        //add api
        this.api();
    }
    /**
     * Create REST API routes
     *
     * @class Server
     */
    api() {
        var router = express_1.default.Router();
        // configure CORS
        const corsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "http://localhost:4200",
            preflightContinue: false
        };
        router.use(cors_1.default(corsOptions));
        // root request
        router.get("/", (req, res, next) => {
            res.json({ announcement: "Welcome to our API." });
            next();
        });
        // create API routes
        hero_1.HerosApi.create(router);
        // wire up the REST API
        this.app.use("/api", router);
        // enable CORS pre-flight
        router.options("*", cors_1.default(corsOptions));
    }
    /**
     * Configure application
     *
     * @class Server
     */
    config() {
        // morgan middleware to log HTTP requests
        this.app.use(morgan_1.default("dev"));
        //use json form parser middlware
        this.app.use(bodyParser.json());
        //use query string parser middlware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // connect to mongoose
        mongoose.connect("mongodb://localhost:27017/mean-material-reactive");
        mongoose.connection.on("error", error => {
            console.error(error);
        });
        //catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());
    }
}
exports.Server = Server;
