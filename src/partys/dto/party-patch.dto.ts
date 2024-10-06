import { PartialType } from "@nestjs/mapped-types";
import { PartyDTO } from "./party.dto";


export class PartyPatchDTO extends PartialType(PartyDTO) {
  
}