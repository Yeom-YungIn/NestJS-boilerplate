import {Injectable, UnauthorizedException} from '@nestjs/common';
import bcrypt from 'bcrypt'
import {User} from "./entity/user.entity";
import {Repository} from "typeorm";
import {AuthCredentialDto} from "./dto/auth-credential.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ) {
    }

    async signUp(authCredentialDto: AuthCredentialDto): Promise<User> {
        let {name, password} = authCredentialDto;
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);

        const user = this.userRepository.create({
            name,
            password,
        });

        return await this.userRepository.save(user);
        }

    async generateAccessToken (authCredentialDto: AuthCredentialDto) {
        const {name, password} = authCredentialDto;
        const user = await this.userRepository.findOneBy({name});
        const compare = await bcrypt.compare(password, user.password);
        if (user && compare) {
            const payload = { name }
            const accessToken = this.jwtService.sign(payload);
            return {'result': 'Login Success', accessToken};
        }else {
            throw new UnauthorizedException();
        }
    }

    async generateRefreshToken(authCredentialDto: AuthCredentialDto) {
        const {name} = authCredentialDto;
        return this.jwtService.sign({ sub: name }, { expiresIn: '3h' });
    }
}
