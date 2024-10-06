import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request)
    console.log(token)
    try{
    const payload = await this.jwtService.verifyAsync(
      token,
      {
        secret: process.env.SECRET,
        issuer: 'party'
      }
    );
    request['party'] = payload;
    return true;
  }catch{
    return {
      message:"JWT não inserido ou inválido"
    }
  }
    // 💡 We're assigning the payload to the request object here
    // so that we can access it in our route handl
    
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const token = request.headers.authorization?.split(' ')[1];
    return token
  }
}