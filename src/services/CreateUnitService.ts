import { getRepository } from 'typeorm';
import Unit from '../models/Unit';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  city: string;
  admin_id: string;
}

class CreateUnitService {
  public async execute({ name, city, admin_id }: Request): Promise<Unit> {
    const unitsRepository = getRepository(Unit);

    const checkUnitExists = await unitsRepository.findOne({
      where: { name, city, admin_id },
    });

    if (checkUnitExists) {
      throw new AppError('Unit already exists for this city/admin');
    }

    const unit = unitsRepository.create({
      name,
      city,
      admin_id,
    });

    await unitsRepository.save(unit);

    return unit;
  }
}

export default CreateUnitService;
