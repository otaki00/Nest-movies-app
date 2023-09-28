import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.findByEmail(createUserDto.email);
      if (!user) {
        const user = new User(createUserDto);
        await this.entityManager.save(user);
        return await this.findByEmail(createUserDto.email)
      }
      throw new UnauthorizedException('Credentials taken ..');
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.userRepository.find()
  }

  async findOneById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({
        user_id: id,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        user_id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`Credentials Incorrect !`);
    }

    this.userRepository.merge(user, updateUserDto);

    return await this.entityManager.save(user);
  }

  async remove(id: number) {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.userRepository.findOneBy({
        email: email,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
