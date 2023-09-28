import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateMoviesStreamDto {
  @IsNotEmpty()
  @IsNumber()
  movie_id: number;

  @IsNotEmpty()
  @IsString()
  stream_status: string;

  @IsNotEmpty()
  @IsDateString()
  start_date: Timestamp;

  @IsNotEmpty()
  @IsDateString()
  end_date: Timestamp;
}


