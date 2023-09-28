import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(private crudOp: CrudSharedOP) {}

  create(createSubscriptionDto: CreateSubscriptionDto) {
    const sub = new Subscription(createSubscriptionDto)
    return this.crudOp.create(sub, Subscription);
  }

  findAll() {
    return this.crudOp.findAll(Subscription);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, Subscription);
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.crudOp.update(id, updateSubscriptionDto, Subscription);
  }

  remove(id: number) {
    return this.crudOp.remove(id, Subscription);
  }
}
