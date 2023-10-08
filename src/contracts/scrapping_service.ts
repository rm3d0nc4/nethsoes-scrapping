import { Product } from "../models/product";

export interface ScrappingService {
    fetchProduct(url: string): Promise<Product>;
}