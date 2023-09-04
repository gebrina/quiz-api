import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AppService } from './app.service';
import { getConOptions } from './config/db-con-config';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { QuizCategoryModule } from './quiz-category/quiz-categroy.module';
import { ChoiceModule } from './choice/choice.module';
import { AuthModule } from './auth/auth.module';

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
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      global: true,
      signOptions: {
        expiresIn: '60s',
      },
    }),
    UserModule,
    QuizModule,
    QuizCategoryModule,
    ChoiceModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
