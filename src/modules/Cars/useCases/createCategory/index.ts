import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepository } from "../../Repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase( categoriesRepository );

const createCategoryController = new CreateCategoryController( createCategoryUseCase );

export { createCategoryController };