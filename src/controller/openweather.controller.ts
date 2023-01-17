import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OpenWeatherService } from '../service/openweather.service';

@Controller('openweather')
export class OpenWeatherController {
  
  constructor(
    private readonly openWeatherService: OpenWeatherService,
  ) { }

  @Get('/:zipcode')
  @UseGuards(AuthGuard('api-key'))
  async getByZipcode(
    @Param('zipcode') zipCode: string,
  ) {
    return await this.openWeatherService.getWeatherByZipcode(zipCode);
  }
}
