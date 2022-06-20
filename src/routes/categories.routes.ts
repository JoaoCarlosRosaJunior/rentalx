import { Router } from "express";
import multer from "multer";

import { importCategoryController } from "../modules/Cars/useCases/createImport";
import { CategoriesRepository } from "../modules/Cars/Repositories/implementations/CategoriesRepository";
import createCategoryController from "../modules/Cars/useCases/createCategory";
import { listCategoriesController } from "../modules/Cars/useCases/listCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

//A função da rota deve ser apenas receber a requisição e mandar o response. Não deve fazer validações, isso tem que ficar a cargo de um serviço

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
