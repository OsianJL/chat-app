import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'osidev',
      password: 'osidev25',
      database: 'chatdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChatGateway,
  ],
})
export class AppModule {}
