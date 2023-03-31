import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    async getAll() {
        return this.productsService.getAllProducts()
    }

    @Get('/:name')
    async getByName(@Param('name') name: string) {
        return this.productsService.getProductByName(name)
    }

    @Post()
    async create(@Body() product: Product) {
        this.productsService.createProduct(product)
        return {
            message: 'Product created successfully',
            item: product
        }
    }

    @Post('/update/:name')
    async update(@Param('name') name: string, @Body() product: Product) {
        this.productsService.updateProductByName(name, product)
        return {
            message: 'Product updated successfully',
            item: product
        }
    }

    @Post('/delete/:name')
    async delete(@Param('name') name: string) {
        this.productsService.deleteProductByName(name)
        return {
            message: 'Product deleted successfully'
        }
    }

}
