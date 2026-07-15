import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogos } from "../../jogos/entities/jogos.entity";
import { Role } from "../role.enum";

@Entity({name: 'tb_usuarios'})
export class Usuarios {

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.CLIENTE
    })
    role!: Role;

    @PrimaryGeneratedColumn()
    id!: number

    @Column({length: 100, nullable: false})
    @IsNotEmpty()
    nome!: string

    @Column()
    idade!: number

    @Column({length: 100, nullable: false})
    @IsNotEmpty()
    email!: string

    @Column()
    @IsNotEmpty()
    senha!: string

    @Column()
    @IsNotEmpty()
    foto!: string

    @OneToMany(() => Jogos, jogo => jogo.vendedor)
    jogos!: Jogos[];
}