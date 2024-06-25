import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleCountAggregate {
  @Field(() => Int, { nullable: false })
  articleId!: number;

  @Field(() => Int, { nullable: false })
  slug!: number;

  @Field(() => Int, { nullable: false })
  title!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  body!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  favoritesCount!: number;

  @Field(() => Int, { nullable: false })
  authorId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
