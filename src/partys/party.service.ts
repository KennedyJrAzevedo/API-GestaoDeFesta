import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

import { PartyDTO } from './dto/party.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PartyService {
  constructor(private readonly prisma: PrismaService,
    private readonly authService: AuthService
  ) { }
  async listPartys(status) {
    return this.prisma.party.findMany({
      where: {
        status
      },include:{
        guests:{
          include:{
            guest:true
          }
        }
      }
    })
  }

  async showParty(request) {
    const party = request.party
    return this.prisma.party.findFirst({
      where: {
        id: party.idparty
      },include:{
        guests:{
          include:{
            guest:true
          }
        }
      }
    })
  }

  async tokenParty(id) {
    const data = await this.prisma.party.findUnique({
      where: {
        id
      }
    })
    return this.authService.createToken(data)
  }
  async createParty(data: PartyDTO) {

    const party = await this.prisma.party.create({
      data
    })
    return this.authService.createToken(party)
  }
  async addGuest( idguest,request) {
    const party = request.party
    return this.prisma.partyGuest.create({
      data: {
        idGuest: idguest,
        idParty: party.idparty
      }
    })
  }
  async removeGuest(idguest, request) {
    const party = request.party
    return this.prisma.partyGuest.deleteMany({
      where: {
        idGuest: idguest,
        idParty: party.idparty
      }
    })
  }

  async modifyParty(data, request) {
    const party = request.party
    return this.prisma.party.update({
      where: { id: party.idparty },
      data
    })
  }

  async cancelParty(request) {
    const party = request.party
    return this.prisma.party.update({
      where: { id: party.idparty },
      data: {
        status: 5
      }
    })
  }
  async removeParty(request) {
    const party = request.party

    await this.prisma.partyGuest.deleteMany({
      where: { idParty: party.idparty }
    }
    )
    return this.prisma.party.delete({
      where: { id: party.idparty }
    })

  }
}
