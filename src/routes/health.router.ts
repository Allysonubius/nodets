import { Request,Response,Router } from "express";

const router = Router();

router.get('/', (req : Request, res: Response) => {
    const helloWorld = { message: 'Aplicação funcionando com sucesso !'}
    res.send(helloWorld);
});

router.get('/check',(req:Request, res:Response) => {
    const healthCheck = { message: 'Aplicação está funcionando normalmente !'}
    res.send(healthCheck);
})


export default router;