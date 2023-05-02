import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';
import { authDto } from './dto';

@Injectable()
class AuthService {
  constructor(private prisma: PrismaService) {}

  singin(body: authDto) {
    return this.prisma.user.create({
      data: {
        name: body.name,
        password: body.password,
      },
    });
  }

  singup() {
    return { message: 'singup' };
  }
}
export default AuthService;
