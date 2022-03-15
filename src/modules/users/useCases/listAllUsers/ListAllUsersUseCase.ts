import { CustomApiError } from "../../../error/CustomApiError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const currentUser = this.usersRepository.findById(user_id);
    if (!currentUser) {
      throw new CustomApiError("You are not allowed to list users", 400);
    }
    if (!currentUser.admin) {
      throw new CustomApiError("You are not allowed to list users", 400);
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
