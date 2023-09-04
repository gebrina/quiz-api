import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthResover } from './auth.resover';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthResover, AuthService],
})
export class AuthModule {}
