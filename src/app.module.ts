import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';

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
    ChatModule,
  ],
})
export class AppModule {}
