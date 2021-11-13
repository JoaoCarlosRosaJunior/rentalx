import { Router } from 'express'
import { CreateSpecificationUseCase } from '../modules/Cars/useCases/createSpecification/CreateSpecificationUseCase'
import { SpecificationRepository } from '../modules/Cars/Repositories/implementations/SpecitificationRepository';
import { createSpecificationController } from '../modules/Cars/useCases/createSpecification';

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { specificationRoutes };