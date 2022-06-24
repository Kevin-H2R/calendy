import { IsBoolean,  IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Template } from "src/templates/entities/template.entity";
import { User } from "src/users/entities/user.entity";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public description: string;

  @IsDateString()
  @IsNotEmpty()
  public start: Date;

  @IsDateString()
  @IsNotEmpty()
  public end: Date;

  @IsBoolean()
  @IsOptional()
  public allDay: boolean;

  @IsNumber()
  public userId: number;

  @IsNumber()
  @IsOptional()
  public templateId: number;
}
