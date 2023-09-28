import { IsDate, IsDateString, IsNotEmpty, IsNumber } from "class-validator";
import { Timestamp } from "typeorm";

export class CreateBillDto {
    @IsNotEmpty()
    @IsNumber()
    user_id: number

    @IsNotEmpty()
    @IsNumber()
    total_amount: number

    @IsNotEmpty()
    @IsDateString()
    pay_time: Timestamp

    @IsNotEmpty()
    @IsDate()
    due_date;
}
