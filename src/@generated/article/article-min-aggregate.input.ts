import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  articleId?: true;

  @Field(() => Boolean, { nullable: true })
  slug?: true;

  @Field(() => Boolean, { nullable: true })
  title?: true;

  @Field(() => Boolean, { nullable: true })
  description?: true;

  @Field(() => Boolean, { nullable: true })
  body?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  favoritesCount?: true;

  @Field(() => Boolean, { nullable: true })
  authorId?: true;
}
