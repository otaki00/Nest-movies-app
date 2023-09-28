import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityManager } from "typeorm";


@Injectable()
export class CrudSharedOP {
  constructor(private readonly entityManager: EntityManager) {}

  async create(createMemberDto: any, entity: any) {
    try {
      return await this.entityManager.save(entity, createMemberDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll(entity: any) {
    try {
      return await this.entityManager.find(entity);
    } catch (error) {
      throw error;
    }
  }

  async findSome(entity: any, names: string[], feildName: string) {
    try {
      const some = await this.entityManager
        .createQueryBuilder(entity, 'genre')
        .where(`genre.${feildName} IN (:...names)`, { names: names })
        .getMany();
      return some;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number, entity: any) {
    try {
      return await this.entityManager.findOne(entity, {
        where: {
          member_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateMemberDto: any, entity: any) {
    try {
      const member = await this.findOne(entity, id);
      if (member) {
        return this.entityManager.merge(entity, updateMemberDto);
      }
      throw new NotFoundException();
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number, entity: any) {
    try {
      return await this.entityManager.delete(entity, id);
    } catch (error) {
      throw error;
    }
  }
}