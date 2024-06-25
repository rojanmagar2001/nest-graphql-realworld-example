import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutArticlesInput } from './user-update-to-one-with-where-without-articles.input';

@InputType()
export class UserUpdateOneWithoutArticlesNestedInput {
  @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateWithoutArticlesInput)
  create?: UserCreateWithoutArticlesInput;

  @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

  @Field(() => UserUpsertWithoutArticlesInput, { nullable: true })
  @Type(() => UserUpsertWithoutArticlesInput)
  upsert?: UserUpsertWithoutArticlesInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: UserWhereInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: UserWhereInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'name'>;

  @Field(() => UserUpdateToOneWithWhereWithoutArticlesInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutArticlesInput)
  update?: UserUpdateToOneWithWhereWithoutArticlesInput;
}
