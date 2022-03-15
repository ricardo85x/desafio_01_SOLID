/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

import { CustomApiError } from "../modules/error/CustomApiError";

export const ErrorHandlingMiddleware = (
  error: CustomApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  if (error?.code) {
    return res.status(error.code).json({ error: error.message });
  }

  return res
    .status(500)
    .json({ status: "Error", message: "Internal Server Error", error });
};
