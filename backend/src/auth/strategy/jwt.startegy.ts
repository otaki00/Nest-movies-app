import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/modules/users/users.service';




@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private config: ConfigService, private userService: UsersService){
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: 'oamrhbaksdbkasdasd212123',
        });
    }

    async validate(payload: any){
        const user = await this.userService.findByEmail(payload.email)

        if(!user){
            throw new UnauthorizedException()
        }
        return user
    }

}