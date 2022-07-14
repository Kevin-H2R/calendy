import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Template } from 'src/templates/entities/template.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'datetime' })
  start: Date;

  @Column({ type: 'datetime' })
  end: Date;

  @Column({ default: false })
  allDay: boolean;

  @ManyToOne((_) => Template, (template) => template.events, { nullable: true })
  template: Template;

  @ManyToOne((_) => User, (user) => user.events)
  user: User;
}
