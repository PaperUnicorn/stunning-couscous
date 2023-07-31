import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StorefrontService } from './storefront.service';
import { CreateStorefrontDto } from '../dto/create-storefront.dto';

@Controller(':merchantId/storefront')
@ApiTags('storefront')
export class StorefrontController {
    constructor(private readonly service: StorefrontService){}

    @Post()
    async createStorefront(@Param('merchantId') merchantId: string, @Body() request: CreateStorefrontDto){
        return this.service.createStore(request, merchantId);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.service.findStoreById(id);
    }

    @Get('')
    findAll(@Param('merchantId') merchantId: string) {
      return this.service.findStoresBy({merchant:{id: merchantId}});
    }
}
