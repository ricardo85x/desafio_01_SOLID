import { CustomApiError } from "../../../error/CustomApiError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new CustomApiError(`User ${user_id} not found`, 404);
    }
    return user;
  }
}

export { ShowUserProfileUseCase };
