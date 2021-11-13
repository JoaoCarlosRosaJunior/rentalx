import { CategoriesRepository } from '../../Repositories/implementations/CategoriesRepository'
import { ICategoriesRepository } from '../../Repositories/ICategoriesRepository'

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor (private categoriesRepository: ICategoriesRepository) {}
    
    execute( {description, name}: IRequest): void {

        const categoryAlreadyExist = this.categoriesRepository.findByName( name );

        if (categoryAlreadyExist) {
            throw new Error("Category already exists"); //Não podemos deixar a responsabilidade de lançar a response com o Serviço, por isso lançamos o erro
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }