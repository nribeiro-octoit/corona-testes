import { getRepository } from 'typeorm';
import Unit from '../models/Unit';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  name: string;
  city: string;
  admin_id: string;
}

class UpdateUnitService {
  public async execute({ id, name, city, admin_id }: Request): Promise<Unit> {
    const unitsRepository = getRepository(Unit);

    const checkUnitExists = await unitsRepository.findOne({
      where: { name, city, admin_id },
    });

    if (checkUnitExists) {
      throw new AppError('Unit name already exists for this city/admin.');
    }

    const unit = unitsRepository.create({
      id,
      name,
      city,
      admin_id,
    });

    await unitsRepository.save(unit);

    return unit;
  }
}

export default UpdateUnitService;
