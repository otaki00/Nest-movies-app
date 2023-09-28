import { IsNotEmpty, IsString } from "class-validator";

export class CreateWatchlistDto {
    @IsNotEmpty()
    @IsString()
    list_name: string

    @IsNotEmpty()
    @IsString()
    description: string
}
