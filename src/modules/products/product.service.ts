import { prisma } from "../../prisma/prisma";

type CreateProductInput = {
  name: string;
  sku: string;
  stock: number;
  price: number;
  tenantId: string;
};

export class ProductService {
  static async create(data: CreateProductInput) {
    return prisma.product.create({
      data,
    });
  }

  static async getAll(tenantId: string) {
    return prisma.product.findMany({
      where: { tenantId },
    });
  }
}
