import { PartialType } from "@nestjs/mapped-types";
import { GuestDTO } from "./guest.dto";

export class GuestPatchDTO extends PartialType(GuestDTO) {
  
}