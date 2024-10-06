import { Module } from "@nestjs/common";
import { GuestController } from "./guest.controller";
import { GuestService } from "./guest.service";
import { PrismaModule } from "src/database/prisma.module";
import { PrismaService } from "src/database/prisma.service";



@Module({
  imports:[PrismaModule],
  controllers:[GuestController],
  providers:[GuestService,PrismaService]
})
export class GuestModule {}
