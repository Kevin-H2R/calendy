import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);
    const existingUsersCount = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.email = :email or user.username = :username', {
        email: createUserDto.email,
        username: createUserDto.username,
      })
      .getCount();
    if (existingUsersCount > 0) {
      throw new HttpException(
        'A user with the same username or email already exists',
        HttpStatus.CONFLICT,
      );
    }
    this.usersRepository.insert({ ...createUserDto, password: hash });
    return '';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
