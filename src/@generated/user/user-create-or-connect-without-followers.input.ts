import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserCreateOrConnectWithoutFollowersInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'name'>;

  @Field(() => UserCreateWithoutFollowersInput, { nullable: false })
  @Type(() => UserCreateWithoutFollowersInput)
  create!: UserCreateWithoutFollowersInput;
}
