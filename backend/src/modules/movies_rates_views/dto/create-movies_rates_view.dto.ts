import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateMoviesRatesViewDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsNumber()
  movie_id: number;

  rate?: number

  review_content?: string
}
