import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Jogos } from "../entities/jogos.entity";

@Injectable()
export class JogosService {
    constructor(
        @InjectRepository(Jogos)
        private jogoRepository: Repository<Jogos>
    ) {}

    async findAll(): Promise<Jogos[]> {
        return await this.jogoRepository.find();
    }

}