import { CategoriesRepository } from "../../Repositories/implementations/CategoriesRepository"; //Vai ter as funções associadas a categorias, como criar, listar e achar pelo nome
import { ListCategoriesUseCase } from "./ListCategoriesUseCase"; //Vai fazer o serviço de get para pegar todas as categories
import { ListCategoriesController } from "./ListCategoriesController"; //Vai retornar o response

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase( categoriesRepository );

const listCategoriesController  = new ListCategoriesController( listCategoriesUseCase );

export { listCategoriesController };