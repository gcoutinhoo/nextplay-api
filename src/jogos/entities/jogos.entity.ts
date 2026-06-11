import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_jogos"})
export class Jogos {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo!: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao!: string;

    @IsNotEmpty()
    @Column()
    imagem!: string;

}