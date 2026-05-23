import { Request } from "express";

export const getTenantId = (req: Request) => {
  if (!req.user?.tenantId) {
    throw new Error("Missing tenant context");
  }

  return req.user.tenantId;
};

export const getUserId = (req: Request) => {
  if (!req.user?.userId) {
    throw new Error("Missing user context");
  }

  return req.user.userId;
};
