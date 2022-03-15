import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUSer = new User();
    Object.assign(newUSer, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(newUSer);
    return newUSer;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    this.users = this.users.map((user) => {
      if (user.id === receivedUser.id) {
        return { ...user, admin: true, updated_at: new Date() };
      }
      return user;
    });

    return this.findById(receivedUser.id);
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
