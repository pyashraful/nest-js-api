import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma/prisma.service';

@Injectable()
class AuthService {
  constructor(private prisma: PrismaService) {}

  singin() {
    return this.prisma.user.create({
      data: {
        name: 'ashraful',
        password: '123',
      },
    });
  }

  singup() {
    return { message: 'singup' };
  }
}
export default AuthService;
