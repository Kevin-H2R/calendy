import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
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
  @Transform(({ value }) => value === 'true')
  public allDay: boolean;

  @IsNumber()
  @Transform(({ value }) => Number.parseInt(value))
  public userId: number;

  @IsNumber()
  @IsOptional()
  public templateId: number;
}
