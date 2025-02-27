import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-headerapikey';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {

  constructor() {
      super({ header: 'X-API-KEY', prefix: '' },
      true,
      async (apiKey, done) => {
          return this.validate(apiKey, done);
      });
  }

  public validate = (apiKey: string, done: (error: Error, data) => {}) => {
      if (process.env.API_PRIVATE_KEY === apiKey) {
        done(null, true);
      }
      done(new UnauthorizedException('You are unauthorized to access this weather api.'), null);
  }
}
