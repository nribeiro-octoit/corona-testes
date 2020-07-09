import { getRepository } from 'typeorm';
import Patient from '../models/Patient';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  birthday: Date;
  country: string;
  neighborhood: string;
  address: string;
  contact_number: string;
  is_health_area: boolean;
  is_security_area: boolean;
  date_test: Date;
  symptom_start: Date;
  three_days_without_symptom: boolean;
  isolation_period: string;
  result: boolean;
  test_mark: string;
  is_notificated: boolean;
  unit_id: string;
  user_id: string;
}

class CreatePatientService {
  public async execute(patient: Request): Promise<Patient> {
    const patientsRepository = getRepository(Patient);

    const patientNew = patientsRepository.create(patient);

    await patientsRepository.save(patientNew);

    return patientNew;
  }
}

export default CreatePatientService;
