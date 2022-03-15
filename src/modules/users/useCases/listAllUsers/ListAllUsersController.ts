import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IListAllUsersRequest extends Request {
  headers: IncomingHttpHeaders & {
    user_id: string;
  };
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = (request as IListAllUsersRequest).headers;
    const result = this.listAllUsersUseCase.execute({ user_id });
    return response.json(result);
  }
}

export { ListAllUsersController };
