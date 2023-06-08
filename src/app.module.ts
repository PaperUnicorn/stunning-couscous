import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchant/merchant.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './merchant/entities/merchant.entity';
import { TenantModule } from './tenant/tenant.module';
import { Tenant } from './tenant/entities/tenant.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [Merchant, Tenant],
      synchronize: true,
    }),
    
    MerchantModule,
    TenantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
