import { CategoriesRepository } from '../../Repositories/implementations/CategoriesRepository'
import { ICategoriesRepository } from '../../Repositories/ICategoriesRepository'
import { Category } from '../../model/Category'


class ListCategoriesUseCase {
    constructor (private categoriesRepository: ICategoriesRepository ) {};

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    };
};

export { ListCategoriesUseCase };