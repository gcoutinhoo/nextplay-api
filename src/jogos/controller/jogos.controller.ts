import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { JogosService } from "../service/jogos.service";
import { Jogos } from "../entities/jogos.entity";

@Controller('/jogos')
export class JogosController {
    constructor(private readonly jogosService: JogosService) {}

    @Get() //http://localhost:4000/jogos
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Jogos[]> {
        return this.jogosService.findAll();
    }
}