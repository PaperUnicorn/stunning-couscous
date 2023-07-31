import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MerchantModule } from 'src/merchant/merchant.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { TenantModule } from 'src/tenant/tenant.module';
import { ApiKeyStrategy } from './apikey.strategy';

@Module({
  imports: [
    TenantModule,
    MerchantModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretivw55343',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, ApiKeyStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
