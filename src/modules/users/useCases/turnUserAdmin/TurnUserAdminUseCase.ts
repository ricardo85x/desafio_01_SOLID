import { CustomApiError } from "../../../error/CustomApiError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const currentUser = this.usersRepository.findById(user_id);

    if (!currentUser) {
      throw new CustomApiError("User not found", 404);
    }
    return this.usersRepository.turnAdmin(currentUser);
  }
}

export { TurnUserAdminUseCase };
