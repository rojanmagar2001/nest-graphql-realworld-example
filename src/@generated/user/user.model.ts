import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  bio!: string | null;

  @Field(() => String, { nullable: true })
  image!: string | null;

  @Field(() => [User], { nullable: true })
  following?: Array<User>;

  @Field(() => [User], { nullable: true })
  followers?: Array<User>;

  @Field(() => [Article], { nullable: true })
  favoriteArticles?: Array<Article>;

  @Field(() => [Article], { nullable: true })
  articles?: Array<Article>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => UserCount, { nullable: false })
  _count?: UserCount;
}
