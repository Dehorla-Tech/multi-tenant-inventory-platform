import jwt from "jsonwebtoken";
import { env } from "../config/env";

type Payload = {
  userId: string;
  tenantId: string;
  role: string;
};

export const generateToken = (payload: Payload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};
