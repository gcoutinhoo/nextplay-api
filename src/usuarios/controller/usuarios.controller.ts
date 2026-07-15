import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { UsuariosService } from "../service/usuarios.service";
import { Usuarios } from "../entities/usuarios.entity";

@Controller('usuarios')
export class UsuariosController {

    constructor(
        private readonly usuariosService: UsuariosService) {}

    @Get() //http://localhost:4000/usuarios
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuarios[]> {
        return this.usuariosService.findAll();
    }

    @Get(':id') //http://localhost:4000/usuarios/1
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<Usuarios> {
        return this.usuariosService.findById(id);
    }

    @Get('name/:name') //http://localhost:4000/usuarios/name/Pedro
    @HttpCode(HttpStatus.OK)
    findByName(@Param('name') name: string): Promise<Usuarios[]> {
        return this.usuariosService.findByName(name);
    }

    @Post() //http://localhost:4000/usuarios
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuarios): Promise<Usuarios> {
        return this.usuariosService.create(usuario);
    }

    @Put(':id') //http://localhost:4000/usuarios/1
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: number, @Body() usuario: Usuarios): Promise<Usuarios> {
        return this.usuariosService.update(id, usuario);
    }

    @Delete(':id') //http://localhost:4000/usuarios/1
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.usuariosService.delete(id);
    }
}