import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GuestService {
  constructor(private readonly prisma:PrismaService){}
  createGuest(data) {
    return this.prisma.guest.create({
      data
    })
  }
  async listAll() {
    return this.prisma.guest.findMany({
      include:{
        partys:{
          include:{
            party:true
          }
        }
      }
    })
  }

  async showGuest(id){
    return this.prisma.guest.findFirst({
      where:{id:Number(id)}
    })
  }
  deleteGuest(id) {
    return this.prisma.guest.delete({
      where:{id:Number(id)}
    })
  }
  modifyGuest(id,data) {
    return this.prisma.guest.update({
      where:{id:Number(id)},
      data
    })
  }
}
