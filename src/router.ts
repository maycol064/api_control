import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { deleteEstim } from './handlers/estimation';
import {
  createNewUser,
  deleteUser,
  getUsers,
  updateUser,
} from './handlers/user';
import {
  createFront,
  deleteFront,
  estimToFront,
  getFronts,
  getOneFront,
} from './handlers/fronts';
import {
  addFrontWork,
  createWork,
  deleteFrontWork,
  deleteWork,
  getOneWork,
  getWorks,
  updateWork,
} from './handlers/works';
import {
  getDependencies,
  getDependency,
  createDependency,
  updateDependency,
  deleteDependency,
} from './handlers/dependecy';
import {
  createContractor,
  deleteContractor,
  getContractors,
  getOneContractor,
} from './handlers/contractors';

const router = Router();

// Users
router.get('/users', getUsers);
router.post('/users', createNewUser);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', updateUser);

// Dependencies
router.get('/dependencies', getDependencies);
router.get('/dependencies/:id', getDependency);
router.post('/dependencies', createDependency);
router.patch('/dependencies/:id', updateDependency);
router.delete('/dependencies/:id', deleteDependency);

// Companies
router.get('/companies', getContractors);
router.get('/companies/:id', getOneContractor);
router.post('/companies', createContractor);
router.delete('/companies/:id', deleteContractor);

/*
      Works
*/

router.get('/works', getWorks);

router.get('/works/:id', getOneWork);

router.put(
  '/works/:id',
  body('name').isString().optional(),
  body('location').isString().optional(),
  body('contratist').isString().optional(),
  body('projects').isString().optional(),
  body('financialProgress').isInt().optional(),
  body('physicalProgress').isInt().optional(),
  updateWork
);

router.post(
  '/works',
  body('name').exists().isString(),
  body('location').isString().exists(),
  body('contratist').isString().exists(),
  body('projects').isString().exists(),
  body('financialProgress').isInt().exists(),
  body('physicalProgress').isInt().exists(),
  createWork
);

router.delete('/works/:id', deleteWork);

router.put('/works/addfront/:id', addFrontWork);
router.put('/works/deletefront/:id', deleteFrontWork);

/*
      Fronts
*/

router.get('/fronts', getFronts);

router.get('/fronts/:id', getOneFront);

router.put('/fronts/:id');

router.post(
  '/fronts',
  body('name').exists().isString(),
  body('contract').exists().isString(),
  body('minutas').exists().isString(),
  createFront
);

router.delete('/fronts/:id', deleteFront);

router.post('/fronts/estim/:id', estimToFront);

/*
      Estimaciones
*/

router.delete('/estims/:id', deleteEstim);

export default router;
