import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    //product array
    private readonly products: Product[] = []

    //create products
    createProduct(product: Product) {
        this.products.push(product)
    }

    //get all products
    getAllProducts(): Product[] {
        return this.products
    }

    //get product by name
    getProductByName(name: string) {
        return this.products.find(product => product.name === name)
    }

    //update product by name
    updateProductByName(name: string, product: Product) {
        const productIndex = this.products.findIndex(product => product.name === name)
        this.products[productIndex] = product
    }

    //delete product by name
    deleteProductByName(name: string) {
        const productIndex = this.products.findIndex(product => product.name === name)
        this.products.splice(productIndex, 1)
    }


}
