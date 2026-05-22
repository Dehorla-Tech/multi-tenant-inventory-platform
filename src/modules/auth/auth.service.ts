import bcrypt from "bcrypt";
import { prisma } from "../../prisma/prisma";
import { generateToken } from "../../utils/jwt";

type SignupData = {
  tenantName: string;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

export class AuthService {
  static async signup(data: SignupData) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const tenant = await prisma.tenant.create({
      data: {
        name: data.tenantName,
      },
    });

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role: "OWNER",
        tenantId: tenant.id,
      },
    });

    const token = generateToken({
      userId: user.id,
      tenantId: tenant.id,
      role: user.role,
    });

    return {
      token,
      user,
      tenant,
    };
  }

  static async login(data: LoginData) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const validPassword = await bcrypt.compare(data.password, user.password);

    if (!validPassword) {
      throw new Error("Invalid credentials");
    }

    const token = generateToken({
      userId: user.id,
      tenantId: user.tenantId,
      role: user.role,
    });

    return {
      token,
      user,
    };
  }
}
