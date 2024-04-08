import {Body, Controller, Post, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {User} from "./entity/user.entity";
import {LoginResponseType} from "./types/login-response.type";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto): Promise<User> {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('/login')
    logIn(@Body() authCredentialDto: AuthCredentialDto): Promise<LoginResponseType> {
        return this.authService.login(authCredentialDto);
    }
}
