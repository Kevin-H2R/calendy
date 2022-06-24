import { Template } from "src/templates/entities/template.entity";
import { Event } from "src/events/entities/event.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(_ => Template, template => template.user)
  templates: Template[]
    
  @OneToMany(_ => Event, event => event.user)
  events: Event[]
}
