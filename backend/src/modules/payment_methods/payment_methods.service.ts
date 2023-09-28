import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { PaymentMethod } from './entities/payment_method.entity';

@Injectable()
export class PaymentMethodsService {
  constructor(private crudOp: CrudSharedOP) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const payMethod = new PaymentMethod(createPaymentMethodDto)
    return this.crudOp.create(payMethod, PaymentMethod);
  }

  findAll() {
    return this.crudOp.findAll(PaymentMethod);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, PaymentMethod);
  }

  update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.crudOp.update(id , updatePaymentMethodDto, PaymentMethod);
  }

  remove(id: number) {
    return this.crudOp.remove(id, PaymentMethod);
  }
}
