import { Module } from "@nestjs/common";
import { Usuarios } from "./entities/usuarios.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuariosController } from "./controller/usuarios.controller";
import { UsuariosService } from "./service/usuarios.service";

@Module({
        imports: [TypeOrmModule.forFeature([Usuarios])],
        controllers: [UsuariosController],
        providers: [UsuariosService],
        exports: []
})
export class UsuariosModule {}