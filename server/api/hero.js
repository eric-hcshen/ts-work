"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// model
const hero_1 = require("../model/hero");
/**
 * @class HerosApi
 */
class HerosApi {
    /**
     * Create the api.
     * @static
     */
    static create(router) {
        // DELETE
        router.delete("/heros/:id([0-9a-f]{24})", (req, res, next) => {
            new HerosApi().delete(req, res, next);
        });
        // GET
        router.get("/heros", (req, res, next) => {
            new HerosApi().list(req, res, next);
        });
        router.get("/heros/:id([0-9a-f]{24})", (req, res, next) => {
            new HerosApi().get(req, res, next);
        });
        // POST
        router.post("/heros", (req, res, next) => {
            new HerosApi().create(req, res, next);
        });
        // PUT
        router.put("/heros/:id([0-9a-f]{24})", (req, res, next) => {
            new HerosApi().update(req, res, next);
        });
    }
    /**
     * Create a new hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    create(req, res, next) {
        // create hero
        const hero = new hero_1.Hero(req.body);
        hero.save().then(hero => {
            res.json(hero.toObject());
            next();
        }).catch(next);
    }
    /**
     * Delete a hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    delete(req, res, next) {
        // verify the id parameter exists
        const PARAM_ID = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        const id = req.params[PARAM_ID];
        // get hero
        hero_1.Hero.findById(id).then(hero => {
            // verify hero exists
            if (hero === null) {
                res.sendStatus(404);
                next();
                return;
            }
            hero.remove().then(() => {
                res.sendStatus(200);
                next();
            }).catch(next);
        }).catch(next);
    }
    /**
     * Get a hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    get(req, res, next) {
        // verify the id parameter exists
        const PARAM_ID = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        const id = req.params[PARAM_ID];
        // get hero
        hero_1.Hero.findById(id).then(hero => {
            // verify hero was found
            if (hero === null) {
                res.sendStatus(404);
                next();
                return;
            }
            // send json of hero object
            res.json(hero.toObject());
            next();
        }).catch(next);
    }
    /**
     * List all heros.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    list(req, res, next) {
        // get heros
        hero_1.Hero.find().then(heros => {
            res.json(heros.map(hero => hero.toObject()));
            next();
        }).catch(next);
    }
    /**
     * Update a hero.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    update(req, res, next) {
        const PARAM_ID = "id";
        // verify the id parameter exists
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        const id = req.params[PARAM_ID];
        // get hero
        hero_1.Hero.findById(id).then(hero => {
            // verify hero was found
            if (hero === null) {
                res.sendStatus(404);
                next();
                return;
            }
            // save hero
            Object.assign(hero, req.body).save().then((hero) => {
                res.json(hero.toObject());
                next();
            }).catch(next);
        }).catch(next);
    }
}
exports.HerosApi = HerosApi;
