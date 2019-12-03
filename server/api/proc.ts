import * as express from 'express';
import {NextFunction, Request, Response, Router} from 'express';

const router: Router = express.Router();

router.get('/hello', (req: Request, res: Response, next: NextFunction) => {
    console.log('hello test')
    res.json({name: 'Eric', greeting: 'Hello'});
});

export {router};