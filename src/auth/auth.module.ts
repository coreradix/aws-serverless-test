import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './auth.strategy.apikey';

@Module({
  imports: [PassportModule],
  providers: [ApiKeyStrategy],
})
export class AuthModule { }
