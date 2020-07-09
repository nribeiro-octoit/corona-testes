import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Patient from '../models/Patient';

class DeletePatientService {
  public async execute(id: string): Promise<void> {
    const patientsRepository = getRepository(Patient);

    const patient = await patientsRepository.findOne(id);

    if (!patient) {
      throw new AppError('Patient does not exist');
    }

    await patientsRepository.remove(patient);
  }
}

export default DeletePatientService;
