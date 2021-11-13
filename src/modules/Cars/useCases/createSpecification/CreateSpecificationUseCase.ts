import { ISpecificationRepository } from "../../Repositories/ISpecificationRepository"

interface IRequest {
    name;
    description;
}

class CreateSpecificationUseCase {
    constructor ( private specificationsRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist = this.specificationsRepository.findByName( name );

        if ( specificationAlreadyExist ) {
            throw new Error("Specification already Exist")
        }

        this.specificationsRepository.create({ name, description });
    }
};

export { CreateSpecificationUseCase };