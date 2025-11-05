// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({}), // usamos valores dinámicos en runtime
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
