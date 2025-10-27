import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/productController';

const routes = Router();
routes.get('/:category', getRecords);
routes.get('/:category/:slug', getRecord);

export const productRoutes = routes;
