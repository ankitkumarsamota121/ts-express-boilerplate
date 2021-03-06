import { Request, Response, Router } from 'express';
import { helloWorld } from '../controllers/hello';

const router = Router();

router.get('/hello', helloWorld);

export default router;
