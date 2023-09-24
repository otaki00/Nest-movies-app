import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as argon from 'argon2'
import { UsersService } from 'src/modules/users/users.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(email: string, password: string) {
    try {
      const user = await this.userService.findByEmail(email);

      if (!user) {
        throw new NotFoundException('You Are Not Signin !!');
      }
      const pwdMatch = await argon.verify(user.password, password);
      if (!pwdMatch) {
        throw new UnauthorizedException('Creditails incorrect !');
      }
      return {
        accessToken: await this.signToken(user.user_id, user.email),
      };
    } catch (error) {
      throw error;
    }
  }

  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.configService.get<string>('JWT_SECRET');

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '30m',
      secret: secret,
    });

    return token;
  }

  async signup(email: string, password: string, name:string, username: string, payment_method?: number) {
    try {

      const hash = await argon.hash(password)

      const user = await this.userService.create({email, password: hash, name, username, payment_method })
      
      return {
        accessToken: await this.signToken( user.user_id, user.email),
      };
    } catch (error) {
      throw error;
    }
  }
}
