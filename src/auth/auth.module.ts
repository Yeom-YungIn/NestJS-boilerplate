import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, } from '@nestjs/config';
import {JwtModule} from "@nestjs/jwt";
import * as config from 'config';
import {JwtStrategy} from "./strategies/jwt.strategy";
import {PassportModule} from "@nestjs/passport";

const jwtConfig = config.get('jwt');
@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
          secret: jwtConfig.secretKey,
          signOptions: {
            expiresIn: jwtConfig.expiresIn,
          }
        }),
        PassportModule.register({
            defaultStrategy: 'jwt',
        })
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
