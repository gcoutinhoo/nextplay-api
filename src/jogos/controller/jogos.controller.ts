import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
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

    @Post() //http://localhost:4000/jogos
    @HttpCode(HttpStatus.CREATED)
    create(@Body() jogo: Jogos): Promise<Jogos> {
        return this.jogosService.create(jogo);
    }

    @Post('/:id') //http://localhost:4000/jogos/1
    @HttpCode(HttpStatus.OK)
    update(@Param('id', ParseIntPipe) id: number, @Body() jogo: Jogos): Promise<Jogos> {
        return this.jogosService.update(id, jogo);
    }

    @Delete('/:id') //http://localhost:4000/jogos/1
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.jogosService.delete(id);
    }

}