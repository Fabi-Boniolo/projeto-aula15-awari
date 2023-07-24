import { Router } from 'express';
import cursoController from '../controllers/curso';

const router = new Router();

router.get('/', (req, res) => cursoController.get(req, res));
router.get('/:id', (req, res) => cursoController.getById(req, res));
router.post('/', (req, res) => cursoController.create(req, res));
router.put('/:id', (req, res) => cursoController.update(req, res));
router.delete('/:id', (req, res) => cursoController.delete(req, res));

export default router;