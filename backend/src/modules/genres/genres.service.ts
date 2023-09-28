import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private genresRepo: Repository<Genre>,
  ) {}

  async create(createGenreDto: CreateGenreDto) {
    try {
      const genre = new Genre(createGenreDto);
      return await this.genresRepo.save(genre);
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.genresRepo.find();
    } catch (error) {
      throw error;
    }
  }

  async findGenres(genresNames: string[]) {
    try {
      const genres = await this.genresRepo
        .createQueryBuilder('genre')
        .where('genre.name IN (:...names)', { names: genresNames })
        .getMany();
      return genres;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.genresRepo.findOne({
        where: {
          genre_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async findByName(name: string) {
    try {
      return await this.genresRepo.findOne({
        where: {
          type: name,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    const genre = await this.genresRepo.findOne({
      where: {
        genre_id: id,
      },
    });
    if (!genre) {
      throw new NotFoundException(`Credentials Incorrect !`);
    }
    this.genresRepo.merge(genre, updateGenreDto);
  }

  async remove(id: number) {
    try {
      const genre = await this.genresRepo.findOneBy({
        genre_id: id,
      });

      return genre;
    } catch (error) {
      throw error;
    }
  }
}
