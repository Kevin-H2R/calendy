import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber()
  public userId: number;
}
