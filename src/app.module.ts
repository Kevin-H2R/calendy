import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './users/entities/user.entity';
import { TemplatesModule } from './templates/templates.module';
import { EventsModule } from './events/events.module';
import { Template } from './templates/entities/template.entity';
import { Event } from './events/entities/event.entity';
import { SecurityController } from './security/security.controller';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'root',
    database: 'calendy',
    entities: [User, Template, Event],
    synchronize: true,
  }), TemplatesModule, EventsModule,],
  controllers: [AppController, SecurityController],
  providers: [AppService],
})
export class AppModule {}
