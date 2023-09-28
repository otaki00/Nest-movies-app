import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSubscriptionDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsNotEmpty()
  @IsString()
  sub_status: string;

  @IsNotEmpty()
  @IsNumber()
  plan_id: number;
}
