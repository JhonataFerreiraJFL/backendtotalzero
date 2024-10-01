import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jhonataferreirajfl:E2bzwKE0vKXhR8RL@cluster0.gbs3g.mongodb.net/nome-do-banco-de-dados'), // Substitua "nome-do-banco-de-dados" pelo nome real do seu banco
    UsersModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
