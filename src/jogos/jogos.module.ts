import { Module } from "@nestjs/common";
import { Jogos } from "./entities/jogos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    controllers: [],
    providers: [],
    exports: []
})

export class JogosModule {}