import { Transform } from "class-transformer"
import { IsBooleanString, IsDateString, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class GuestDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsEmail()
  email: string

}