import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartyModule } from './partys/party.module';
import { GuestModule } from './guests/guest.module';


@Module({
  imports: [PartyModule,GuestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
