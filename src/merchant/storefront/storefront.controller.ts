import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StorefrontService } from './storefront.service';
import { CreateStorefrontDto } from '../dto/create-storefront.dto';
import { UpdateStorefrontDto } from '../dto/update-storefront.dto';

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

    @Patch(':id')
    async updateOne(@Param('merchantId') merchantId: string, @Param('id') id: string, @Body() request: UpdateStorefrontDto) {
      const store = await this.service.findStoreById(id);
      if(!store){
        throw Error("No such store with ID "+id)
      }
      request.Id = store.id;
      return this.service.createStore(request,merchantId);
    }
}
