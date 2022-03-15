import { CustomApiError } from "../../../error/CustomApiError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userExists = this.usersRepository.findByEmail(email);
    if (userExists) {
      throw new CustomApiError(`User ${email} already exists`, 400);
    }
    const newUSer = this.usersRepository.create({ email, name });
    return newUSer;
  }
}

export { CreateUserUseCase };
