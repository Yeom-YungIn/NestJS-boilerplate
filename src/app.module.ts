import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import appConfig from "./config/app.config";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig
      ],
      envFilePath: ['env/.env.production', 'env/.env.development'],
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
