import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConOptions } from './config/db-con-config';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { QuizCategoryModule } from './quiz-category/quiz-categroy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return getConOptions(configService);
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    QuizModule,
    QuizCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
