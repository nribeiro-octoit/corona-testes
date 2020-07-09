import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateUnitService from '../services/CreateUnitService';
import UpdateUnitService from '../services/UpdateUnitService';
import Unit from '../models/Unit';

const unitsRouter = Router();

unitsRouter.use(ensureAuthenticated);

unitsRouter.get('/', async (request, response) => {
  const unitsRepository = getRepository(Unit);

  const admin_id = request.user.id;

  const units = await unitsRepository.find({
    where: { admin_id },
  });

  return response.json(units);
});

unitsRouter.get('/:id', async (request, response) => {
  const unitsRepository = getRepository(Unit);
  const { id } = request.params;

  const unit = await unitsRepository.findOne({
    where: { id },
  });

  return response.json(unit);
});

unitsRouter.post('/', async (request, response) => {
  const { name, city } = request.body;

  const createUnit = new CreateUnitService();

  const unit = await createUnit.execute({
    name,
    city,
    admin_id: request.user.id,
  });

  return response.json(unit);
});

unitsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, city } = request.body;

  const updateUnit = new UpdateUnitService();

  const admin_id = request.user.id;

  const unit = await updateUnit.execute({
    id,
    name,
    city,
    admin_id,
  });

  return response.json(unit);
});

export default unitsRouter;
