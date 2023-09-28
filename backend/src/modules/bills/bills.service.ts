import { Injectable } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillsService {
  constructor(private crudOp: CrudSharedOP){}
  create(createBillDto: CreateBillDto) {
    const bill = new Bill(createBillDto)
    return this.crudOp.create(bill, Bill);
  }

  findAll() {
    return this.crudOp.findAll(Bill)
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, Bill);
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return this.crudOp.update(id, updateBillDto, Bill)
  }

  remove(id: number) {
    return this.crudOp.remove(id, Bill);
  }
}
