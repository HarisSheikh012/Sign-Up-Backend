import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'sign up',
      port: 3306,
      username: 'root',
      password: '',
      entities: [User],
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
