import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import  { GuestService } from './guest.service';
import  { GuestPatchDTO } from './dto/guest-patch.dto';
import { GuestDTO } from './dto/guest.dto';

@UsePipes(new ValidationPipe({transform:true}))
@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}
  @Post('create')
  async createGuest(@Body() data: GuestDTO) {
    return this.guestService.createGuest(data);
  }

  @Get('list')
  async listAll() {
    return this.guestService.listAll();
  }
  @Get('show/:id')
  async showGuest(@Param('id') id) {
    return this.guestService.showGuest(id);
  }

  @Patch('modify/:id')
  async modifyGuest(@Param('id') id, @Body() data : GuestPatchDTO){
    return this.guestService.modifyGuest(id,data)
  }

  @Delete('delete/:id')
  deleteGuest(@Param('id') id) {
    return this.guestService.deleteGuest(id);
  }
}
