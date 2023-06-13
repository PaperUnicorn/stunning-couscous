import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchant/merchant.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './tenant/tenant.module';
import { RouterModule } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './apikey.strategy';
import { AuthService } from './auth.service';

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
      autoLoadEntities: true,
      synchronize: true,
    }),
    RouterModule.register([
      {
        path: 'merchant',
        module: MerchantModule
      },
      {
        path: 'tenant',
        module: TenantModule
      },
    ]),
    MerchantModule,
    TenantModule,
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, ApiKeyStrategy],
})
export class AppModule {}
