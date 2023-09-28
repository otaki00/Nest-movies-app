import { IsNotEmpty, IsString } from "class-validator";
import { Movie } from "src/modules/movies/entities/movie.entity";

export class CreateGenreDto {
    @IsNotEmpty()
    @IsString()
    types: string;

    movies?: Movie[]
}
