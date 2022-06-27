import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { SecurityController } from './security.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [SecurityController],
})
@Module({})
export class SecurityModule {}
