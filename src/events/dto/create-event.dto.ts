import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsDateString, IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
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
}
