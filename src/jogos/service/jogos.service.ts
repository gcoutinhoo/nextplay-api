import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Jogos } from "../entities/jogos.entity";

@Injectable()
export class JogosService {
    constructor(
        @InjectRepository(Jogos)
        private jogoRepository: Repository<Jogos>
    ) {}

    async findAll(): Promise<Jogos[]> {
        const jogos = await this.jogoRepository.find();
        if(jogos .length === 0) {
            throw new HttpException('Jogos não encontrados', HttpStatus.NOT_FOUND);
        }
        return jogos;
    }

    async findById(id: number): Promise<Jogos>{
        const jogo = await this.jogoRepository.findOne({
            where: {
                id
            }
        });
        if(!jogo) {
            throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
        }
        return jogo;
    }

    async findByTitle(title: string): Promise<Jogos[]> {
        const jogos = await this.jogoRepository.find({
            where: {
                titulo: ILike(`%${title}%`)
            }
        });
        if(jogos.length === 0) {
            throw new HttpException('Jogos não encontrados', HttpStatus.NOT_FOUND);
        }
        return jogos;
    }

    async create(jogo: Jogos): Promise<Jogos> {
        return this.jogoRepository.save(jogo);
    }

    async update (id: number, jogo: Jogos): Promise<Jogos> {
        const jogoUpdate = await this.findById(id);
        return this.jogoRepository.save({...jogoUpdate, ...jogo});
    }

    async delete(id: number) {
        const jogo = await this.findById(id);
        return this.jogoRepository.remove(jogo);
    }





}