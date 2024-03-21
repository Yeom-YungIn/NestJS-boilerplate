import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, } from '@nestjs/config';
import {JwtModule} from "@nestjs/jwt";
import * as config from 'config';

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
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
