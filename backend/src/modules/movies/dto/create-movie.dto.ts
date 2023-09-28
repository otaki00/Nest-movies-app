import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsDate()
    release_date: Date

    @IsNotEmpty()
    genres: string[]
}
