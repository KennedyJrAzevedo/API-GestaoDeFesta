import { Body, Controller, Delete, Get, Param, Patch, UsePipes, Headers, ValidationPipe, UseGuards, Request, Post } from '@nestjs/common';
import { PartyService } from './party.service';
import  { PartyDTO } from './dto/party.dto';
import { PartyPatchDTO } from './dto/party-patch.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@UsePipes(new ValidationPipe({transform:true}))
@Controller('party')
export class PartyController {
  constructor(private readonly PartyService: PartyService) {}

  @Get('list/:status')
  async listPartys(@Param('status') status: number) {
    return this.PartyService.listPartys(status);
  }

  @UseGuards(AuthGuard)
  @Get('show/')
  async showParty(@Request() request) {
    return this.PartyService.showParty(request);
  }

  @Get('token/:id')
  async tokenParty(@Param('id') id: number){
    return this.PartyService.tokenParty(id)
  }
  
  @Post('create')
  async createParty(@Body() data: PartyDTO) {
    return this.PartyService.createParty(data);
  }

  @UseGuards(AuthGuard)
  @Post('addguest/:idguest')
  async addGuest(@Request() request,@Param('idguest') idguest:number){
    return this.PartyService.addGuest(idguest,request)
  }
  @UseGuards(AuthGuard)
  @Delete('removeguest/:idguest')
  async removeGuest(@Request() request,@Param('idguest') idguest:number) {
    return this.PartyService.removeGuest(idguest,request)
  }
  @UseGuards(AuthGuard)
  @Patch('modify')
  async modifyParty(@Body() data: PartyPatchDTO,@Request() request){
    return this.PartyService.modifyParty(data,request)
  }
  @UseGuards(AuthGuard)
  @Patch('cancel')
  async cancelParty(@Request() request) {
    return this.PartyService.cancelParty(request);
  }

  @UseGuards(AuthGuard)
  @Delete('delete')
  async removeParty(@Request() request) {
    return this.PartyService.removeParty(request);
  }
}
