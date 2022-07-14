import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm/repository/Repository';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('security')
export class SecurityController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Post('/login')
  async login(@Req() request: Request) {
    const body = request.body;
    const user = await this.usersRepository.findOneBy({
      username: body.username,
    });
    if (!user) {
      throw new HttpException('USER DOES NOT EXIST', HttpStatus.NOT_FOUND);
    }
    const match = await bcrypt.compare(body.password, user.password);
    if (!match) {
      throw new HttpException('WRONG PASSWORD', HttpStatus.UNAUTHORIZED);
    }
    return {
      statusCode: 200,
      message: 'login route',
      data: { id: user.id, username: user.username },
    };
  }
}
