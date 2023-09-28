import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionDto } from './create-subscription.dto';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {
    user_id?: number;
    start_date?: Date;
    sub_status?: string;
    plan_id?: number;
}
