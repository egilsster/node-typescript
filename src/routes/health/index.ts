import { Router } from 'express';
import * as controller from './health.controller';

const router = Router();

router.use('/', controller.health);

export default router;
