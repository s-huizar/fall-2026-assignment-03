import { Router } from 'express';
import { getAllTickets, getTicketById, createTicket, updateTicketStatus } from '../dal/tickets.js';
import { authMiddleware } from '../middleware/auth.js';


const router = Router();

// TODO: Student implementation - Part 1: Ticket Routes
// GET /tickets
router.get('/', async(req, res) => {
    return res.status(200).json(await getAllTickets());
});


// GET /tickets/:id
router.get('/:id', async(req, res) => {
    if (await getTicketById(Number(req.params.id)) === undefined) {
        return res.status(404).json({message: "Not Found"});
    }
    return res.status(200).json(await getTicketById(Number(req.params.id)));
});

router.use(authMiddleware);
// POST /tickets
router.post('/', async(req, res) => {
    const ticket = createTicket(req.body);
    const title = req.body.title;
    const description = req.body.description;
    const creatorID = req.body.creator_id;

    return res.status(201).json('Created');
})
// PATCH /tickets/:id/status

// TODO: Student implementation - Part 2: Time Log Routes
// POST /tickets/:id/time
// GET /tickets/:id/time

export default router;
