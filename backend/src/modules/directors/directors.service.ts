import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectorsService {
  constructor(
    @InjectRepository(Director)
    private dirRepo: Repository<Director>
  ){}
  async create(createDirectorDto: CreateDirectorDto) {
    try {
      return await this.dirRepo.save(createDirectorDto)
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await this.dirRepo.find()
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      return await this.dirRepo.findOne({
        where: {
          director_id: id
        }
      })
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateDirectorDto: UpdateDirectorDto) {
    try {
      const director = await this.dirRepo.findOne({
        where: {
          director_id: id
        }
      })

      if(!director){
        throw new NotFoundException()
      }

      return this.dirRepo.merge(director, updateDirectorDto)

    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      return await this.dirRepo.delete(id)
    } catch (error) {
      throw error
    }
  }
}
