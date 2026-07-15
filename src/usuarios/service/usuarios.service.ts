import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuarios } from "../entities/usuarios.entity";
import { ILike, Repository } from "typeorm";

Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuarios)
        private usuarioRepository: Repository<Usuarios>
    ) {}

    async findAll(): Promise<Usuarios[]> {
        const usuarios = await this.usuarioRepository.find();
        if (usuarios.length === 0) {
            throw new HttpException('Usuários não encontrados', HttpStatus.NOT_FOUND);
        }
        return usuarios;
    }


    async findById(id: number): Promise<Usuarios> {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                id
            }
        });
        if(!usuario) {
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
        }
        return usuario;
    }

    async findByName(name: string): Promise<Usuarios[]> {
        const usuarios = await this.usuarioRepository.find({
            where: {
                nome: ILike(`%${name}%`)
            }
        });
        if (usuarios.length === 0) {
            throw new HttpException('Usuários não encontrados', HttpStatus.NOT_FOUND);
        }
        return usuarios;
    }

    async create(usuario: Usuarios): Promise<Usuarios> {
        return this.usuarioRepository.save(usuario);
    }

    async update (id: number, usuario: Usuarios): Promise<Usuarios> {
        const usuarioUpdate = await this.findById(id);
        return this.usuarioRepository.save({...usuarioUpdate, ...usuario});
    }

    async delete(id: number) {
        const usuario = await this.findById(id);
        return this.usuarioRepository.remove(usuario);
    }

}