import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { loginSchema, signupSchema } from "./auth.validation";

export class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const validatedData = signupSchema.parse(req.body);

      const result = await AuthService.signup(validatedData);

      res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const validatedData = loginSchema.parse(req.body);

      const result = await AuthService.login(validatedData);

      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}
