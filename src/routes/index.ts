import { Router } from 'express';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import unitsRouter from './units.routes';
import patientsRouter from './patients.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/units', unitsRouter);
routes.use('/patients', patientsRouter);

export default routes;
