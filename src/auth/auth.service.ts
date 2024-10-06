import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}
  private issuer = 'party' 
  async createToken(party){
    return this.jwtService.sign({       // Incluindo o subject no payload
      partyname: party.name,
      idparty: party.id// Outros dados no payload
    },
    {
      issuer: this.issuer,  // O emissor do token
      subject: String(party.id), // O valor de 'subject' será incluído nas opções do JWT
    })
  }
  async checkToken(tokenpayload:string){
    return this.jwtService.verify(tokenpayload,{
      secret:process.env.SECRET,
      issuer:this.issuer
    })
  }
}