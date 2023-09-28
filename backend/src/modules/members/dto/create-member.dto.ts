import { IsNotEmpty, IsString } from "class-validator";

export class CreateMemberDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    job: string

}
