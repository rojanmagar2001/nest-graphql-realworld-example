import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'name'>;

  @Field(() => UserUpdateWithoutFollowersInput, { nullable: false })
  @Type(() => UserUpdateWithoutFollowersInput)
  data!: UserUpdateWithoutFollowersInput;
}
