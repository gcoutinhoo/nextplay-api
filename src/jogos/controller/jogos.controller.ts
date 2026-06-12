import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { JogosService } from "../service/jogos.service";
import { Jogos } from "../entities/jogos.entity";

@Controller("/jogos") 
export class JogosController {
    constructor(private readonly jogosService: JogosService) {}

    @Get() //http://localhost:4000/jogos
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Jogos[]> {
        return this.jogosService.findAll();
    }

    @Get('/:id') //http://localhost:4000/jogos/1
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Jogos> {
        return this.jogosService.findById(id);
    }

    @Get('titulo/:title') //http://localhost:4000/jogos/titulo/Naruto
    @HttpCode(HttpStatus.OK)
    findByTitle(@Param('title') title: string): Promise<Jogos[]> {
        return this.jogosService.findByTitle(title);
    }

}