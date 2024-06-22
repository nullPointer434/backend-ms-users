import { Router } from 'express';
import { getUsers, paginatedUsers, createUser, deleteUser } from './../controllers/user.controller';

const router = Router();

router.get('/users', getUsers);
router.get('/paginated-users', paginatedUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser)

export default router;
