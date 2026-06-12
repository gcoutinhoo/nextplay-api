import { Module } from "@nestjs/common";
import { Jogos } from "./entities/jogos.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogosController } from "./controller/jogos.controller";
import { JogosService } from "./service/jogos.service";

@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    controllers: [JogosController],
    providers: [JogosService],
    exports: []
})

export class JogosModule {}