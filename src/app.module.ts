import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogos } from './jogos/entities/jogos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'db_nextplay',
      entities: [Jogos],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
