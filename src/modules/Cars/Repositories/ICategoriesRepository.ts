import { Category } from '../model/Category'

// New concept: DTO => Data to Transfer. É quando recebemos dados de request e transformamos em objeto para conversar com outros repositorios
interface ICreateCategoryDTO {
    name: string;
    description: string;
};

interface ICategoriesRepository {
    findByName( name: String ): Category;
    list(): Category[];
    create( {name, description}: ICreateCategoryDTO ): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };