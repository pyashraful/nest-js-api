import { Controller, Post, Req } from '@nestjs/common';
import AuthService from './auth.service';

@Controller('auth')
class AuthController {
  constructor(private authService: AuthService) {}

  @Post('singup')
  singup() {
    return this.authService.singup();
  }

  @Post('singin')
  singin(@Req() reg: Request) {
    console.log(reg.body);
    return this.authService.singin();
  }
}

export default AuthController;
