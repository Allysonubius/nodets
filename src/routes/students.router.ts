import { Request,Response,Router } from "express";

const router = Router();

const students = [
    {
        name:'teste',
        email:'teste@gmail.com',
        document:'28622096009',
        password: '123456',
        age:25
    },{
        name:'lucas',
        email:'lucas@gmail.com',
        document:'06485704019',
        password: '123456',
        age:25
    },{
        name:'gabriel',
        email:'gabriel@gmail.com',
        document:'35474145047',
        password: '123456',
        age:25
    },{
        name:'ana',
        email:'ana@gmail.com',
        document:'17803758088',
        password: '123456',
        age:25
    }
];

router.get('/list/', (req: Request, res: Response) => {
    if (students.length === 0) {
        res.status(204).send(); // No Content
    } else {
        res.send(students);
    }
});

router.get('/list/:document', (req: Request, res: Response) => {
    const documentToFind = req.params.document;
    const student = students.find(student => student.document === documentToFind);

    if (student) {
        res.send(student);
    } else {
        res.status(404).send({ 'message': 'Aluno não encontrado!' });
    }
});

router.post('/create/', (req: Request, res: Response) => {
    const newStudent = req.body;

    // Verifique se já existe um estudante com o mesmo documento
    const existingStudent = students.find(student => student.document === newStudent.document);

    if (existingStudent) {
        res.status(400).send({ 'message': 'Aluno com o mesmo documento já existe!' });
    } else {
        students.push(newStudent);
        res.status(201).send({ 'message': 'Aluno criado com sucesso!' });
    }
});


router.delete('/delete/:document', (req: Request, res: Response) => {
    const documentToDelete = req.params.document; // Valor do parâmetro document
    console.log('Document to delete:', req.params);

    // Encontre o índice do estudante com base no documento
    const indexToRemove = students.findIndex(student => student.document === documentToDelete);

    if (indexToRemove === -1) {
        // Se o índice for -1, significa que o documento não foi encontrado na matriz
        res.status(400).send({ 'message': 'Aluno não encontrado!' });
    } else {
        // Remova o estudante da matriz usando o método splice
        students.splice(indexToRemove, 1);
        res.status(200).send({ 'message': 'Aluno excluído!' });
    }
});

router.put('/atualiza/:document', (req: Request, res: Response) => {
    const documentToDelete = req.params.document; // Valor do parâmetro document
    console.log('Document to delete:', req.params);

    // Encontre o índice do estudante com base no documento
    const putIndex = students.findIndex(student => student.document === documentToDelete);

    if (putIndex === -1) {
        // Se o índice for -1, significa que o documento não foi encontrado na matriz
        res.status(400).send({ 'message': 'Aluno não encontrado!' });
    } else {
        // Remova o estudante da matriz usando o método splice
        students[putIndex] = req.body;
        res.status(200).send({ 'message': 'Aluno atualizado!' });
    }
});


export default router;