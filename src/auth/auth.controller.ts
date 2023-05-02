import { Body, Controller, Post, Req } from '@nestjs/common';
import AuthService from './auth.service';
import { authDto } from './dto';

@Controller('auth')
class AuthController {
  constructor(private authService: AuthService) {}

  @Post('singup')
  singup() {
    return this.authService.singup();
  }

  @Post('singin')
  singin(@Body() dto: authDto) {
    return this.authService.singin(dto);
  }
}

export default AuthController;
