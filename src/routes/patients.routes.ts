import { Router } from 'express';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import Patient from '../models/Patient';
import CreatePatientService from '../services/CreatePatientService';
import UpdatePatientService from '../services/UpdatePatientService';
import DeletePatientService from '../services/DeletePatientService';

const patientsRouter = Router();

patientsRouter.use(ensureAuthenticated);

patientsRouter.get('/', async (request, response) => {
  const patientsRepository = getRepository(Patient);
  const user_id = request.user.id;

  const patients = await patientsRepository.find({
    where: { user_id },
  });

  return response.json(patients);
});

patientsRouter.get('/:id', async (request, response) => {
  const patientsRepository = getRepository(Patient);
  const { id } = request.params;

  const patient = await patientsRepository.findOne(id);

  return response.json(patient);
});

patientsRouter.post('/', async (request, response) => {
  const {
    name,
    birthday,
    country,
    neighborhood,
    address,
    contact_number,
    is_health_area,
    is_security_area,
    date_test,
    symptom_start,
    three_days_without_symptom,
    isolation_period,
    result,
    test_mark,
    is_notificated,
    unit_id,
  } = request.body;

  const createPatient = new CreatePatientService();

  const patient = await createPatient.execute({
    name,
    birthday,
    country,
    neighborhood,
    address,
    contact_number,
    is_health_area,
    is_security_area,
    date_test,
    symptom_start,
    three_days_without_symptom,
    isolation_period,
    result,
    test_mark,
    is_notificated,
    unit_id,
    user_id: request.user.id,
  });

  return response.json(patient);
});

patientsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const {
    name,
    birthday,
    country,
    neighborhood,
    address,
    contact_number,
    is_health_area,
    is_security_area,
    date_test,
    symptom_start,
    three_days_without_symptom,
    isolation_period,
    result,
    test_mark,
    is_notificated,
    unit_id,
  } = request.body;

  const updatePatient = new UpdatePatientService();

  const patient = await updatePatient.execute({
    id,
    name,
    birthday,
    country,
    neighborhood,
    address,
    contact_number,
    is_health_area,
    is_security_area,
    date_test,
    symptom_start,
    three_days_without_symptom,
    isolation_period,
    result,
    test_mark,
    is_notificated,
    unit_id,
    user_id: request.user.id,
  });

  return response.json(patient);
});

patientsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deletePatient = new DeletePatientService();

  await deletePatient.execute(id);

  return response.status(204).json();
});

export default patientsRouter;
