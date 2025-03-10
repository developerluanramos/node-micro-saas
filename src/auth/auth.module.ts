import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/user/user.repository';
import { PrismaService } from 'src/db/prisma.service';

@Module({
  providers: [
    AuthService, 
    UserRepository, 
    PrismaService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
