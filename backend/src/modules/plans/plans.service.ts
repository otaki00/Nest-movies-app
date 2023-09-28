import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { Plan } from './entities/plan.entity';

@Injectable()
export class PlansService {
  constructor(private crudOp: CrudSharedOP) {}

  create(createPlanDto: CreatePlanDto) {
    const plan = new Plan(createPlanDto)
    return this.crudOp.create(plan, Plan);
  }

  findAll() {
    return this.crudOp.findAll(Plan);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, Plan);
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return this.crudOp.update(id, updatePlanDto, Plan);
  }

  remove(id: number) {
    return this.crudOp.remove(id, Plan);
  }
}
