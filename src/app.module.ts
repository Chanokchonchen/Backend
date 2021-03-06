import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { DormModule } from './dorm/dorm.module';
import { ReviewModule } from './review/review.module';
import { AdminModule } from './admin/admin.module';
import { LobbyModule } from './lobby/lobby.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongol:27017/DormLife'),
    AuthModule,
    UsersModule,
    DormModule,
    ReviewModule,
    AdminModule,
    LobbyModule,
    MulterModule.register({
      dest:'./uploads'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
