import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Event } from "src/events/entities/event.entity"
import { User } from "src/users/entities/user.entity"

@Entity()
export class Template {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(_ => User, user => user.templates)
    user: User

    @OneToMany(_ => Event, event => event.template)
    events: Event[]
}