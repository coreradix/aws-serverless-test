import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import axios from 'axios';
import { get } from 'lodash';

@Injectable()
export class OpenWeatherService {

  DEFAULT_VALUE = 'Data Unavailable';

  async getWeatherByZipcode(zipCode: string): Promise<any> {
    // validate zipcode
    if (!/^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/.test(zipCode)) {
      throw new BadRequestException('Australian zipcode is in an invalid format');
    }
    try {
      // request openweather api using key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},au&appid=${process.env.OPENWEATHER_KEY}`);
      const weather = response.data;
      const getValue = (key: string) => get(weather, key, this.DEFAULT_VALUE);
      return {
        lon: getValue('coord.lon'),
        lat: getValue('coord.lat'),
        main: getValue('weather.[0]main'),
        description: getValue('weather[0].description'),
        temp: getValue('main.temp'),
        feels_like: getValue('main.feels_like'),
        temp_min: getValue('main.temp_min'),
        temp_max: getValue('main.temp_max'),
        pressure: getValue('main.pressure'),
        humidity: getValue('main.humidity'),
      };
    } catch (err) {
      // throw error if zipcode weather data not found
      if (err.message.includes('404')) {
        throw new NotFoundException('Weather data could not be found kindly ensure that zipcode exists');
      }
      // throw for any other errors
      throw new ServiceUnavailableException('Cannot access openweather service.', err.message);
    }
  }
}
