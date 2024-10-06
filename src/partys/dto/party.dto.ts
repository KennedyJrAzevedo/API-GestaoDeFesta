import { IsArray, IsDate, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { partyEnum } from "../enums/party.enum"
import { Transform } from "class-transformer"
import type { PartyGuestDTO } from "src/partyguest.dto"

export class PartyDTO{
  @IsNotEmpty()
  @IsString()
  name:string

  @Transform(({value})=>new Date(value))
  @IsDate()
  date:Date

  @IsString()
  adress:string

  @IsString()
  owner:string

  @IsEnum(partyEnum)
  status:number
  
}