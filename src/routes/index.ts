import { Request, Response, Router } from "express";

import heathCheck from './health.router';
import studentRouter from './students.router';

const router = Router();

router.use('/health', heathCheck);
router.use('/student', studentRouter);

export default router;