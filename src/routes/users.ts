import { Router } from 'express';
import { getAllUsers  } from '../dal/users.js';
import { getUserById } from '../dal/users.js';


const router = Router();

// TODO: Student implementation - Part 1: User Routes
// GET /users

router.get('/', async(req, res) => {

    return res.status(200).json(await getAllUsers());
});

// GET /users/:id
router.get('/:id', async(req, res) => {
    return res.status(200).json(await getUserById(Number(req.params.id)));
});

// POST /users
router.post('/', async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    return res.status(201).json('Created');
});

export default router;
