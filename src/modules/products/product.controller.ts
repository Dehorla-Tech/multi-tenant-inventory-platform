import { Request, Response } from "express";
import { ProductService } from "./product.service";

export class ProductController {
  static async create(req: Request, res: Response) {
    try {
      const tenantId = req.user!.tenantId;

      const product = await ProductService.create({
        ...req.body,
        tenantId,
      });

      res.status(201).json({
        success: true,
        data: product,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const tenantId = req.user!.tenantId;

      const products = await ProductService.getAll(tenantId);

      res.json({
        success: true,
        data: products,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
