import { Field, ObjectType, PartialType } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@ObjectType()
export class AuthUserModel extends PartialType(User) {
  @Field(() => String)
  access_token: string;

  @Field(() => User)
  user: User;
}
