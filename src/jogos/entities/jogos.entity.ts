import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "../../usuarios/entities/usuarios.entity";

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

    @ManyToOne(() => Usuarios, user => user.jogos)
    vendedor!: Usuarios;

}