import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private memberRepo: Repository<Member>
  ){}

  async create(createMemberDto: CreateMemberDto) {
    try {
      return await this.memberRepo.save(createMemberDto);
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await this.memberRepo.find()
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      return await this.memberRepo.findOne({
        where: {
          member_id: id
        }
      })
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    try {
      const member = await this.findOne(id)
      if(member){
        return this.memberRepo.merge(member, updateMemberDto)
      }
      throw new NotFoundException();
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      return await this.memberRepo.delete(id)
    } catch (error) {
      throw error
    }
  }
}
