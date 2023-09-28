import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlanDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  total_months: number;
}
