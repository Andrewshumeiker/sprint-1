// src/auth/strategies/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'default_jwt_secret',
    });
  }

  // payload es lo que metimos al firmar el token
  async validate(payload: { sub: string; email: string }) {
    // esto termina como req.user
    return { userId: payload.sub, email: payload.email };
  }
}
