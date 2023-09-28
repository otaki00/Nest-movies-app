import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthLoginDto, AuthSignupDto } from './dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

//   @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() dto: AuthLoginDto) {
    return this.authService.login(dto.email, dto.password);
  }

  @Post('signup')
  signup(@Body() dto: AuthSignupDto) {
    return this.authService.signup(dto.email, dto.password, dto.name, dto.username, dto.paymentMethodId);
  }
}
