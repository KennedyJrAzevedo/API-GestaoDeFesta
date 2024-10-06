import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PartyModule } from 'src/partys/party.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '30m' }
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}