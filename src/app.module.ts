import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { OpenWeatherService } from './service/openweather.service';
import { OpenWeatherController } from './controller/openweather.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [
    AppController,
    OpenWeatherController,
  ],
  providers: [
    AppService,
    OpenWeatherService,
  ],
})
export class AppModule { }
