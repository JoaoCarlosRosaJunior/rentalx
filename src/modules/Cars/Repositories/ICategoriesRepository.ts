import { Category } from "../entities/Category";

// New concept: DTO => Data to Transfer. É quando recebemos dados de request e transformamos em objeto para conversar com outros repositorios
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: String): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
