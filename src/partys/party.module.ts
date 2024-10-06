import { Module } from '@nestjs/common';
import { PartyController } from './party.controller';
import { PartyService } from './party.service';
import { PrismaModule } from 'src/database/prisma.module';
import { PrismaService } from 'src/database/prisma.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [PrismaModule,AuthModule],
  controllers: [PartyController],
  providers: [PartyService,PrismaService],
  exports:[PartyModule]
})
export class PartyModule {}
