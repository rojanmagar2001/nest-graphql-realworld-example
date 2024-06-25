import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagCreateNestedManyWithoutArticlesInput } from '../tag/tag-create-nested-many-without-articles.input';
import { UserCreateNestedOneWithoutArticlesInput } from '../user/user-create-nested-one-without-articles.input';
import { UserCreateNestedManyWithoutFavoriteArticlesInput } from '../user/user-create-nested-many-without-favorite-articles.input';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';

@InputType()
export class ArticleCreateInput {
  @Field(() => String, { nullable: true })
  articleId?: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  favoritesCount?: number;

  @Field(() => TagCreateNestedManyWithoutArticlesInput, { nullable: true })
  tags?: TagCreateNestedManyWithoutArticlesInput;

  @Field(() => UserCreateNestedOneWithoutArticlesInput, { nullable: true })
  author?: UserCreateNestedOneWithoutArticlesInput;

  @Field(() => UserCreateNestedManyWithoutFavoriteArticlesInput, {
    nullable: true,
  })
  favoritedBy?: UserCreateNestedManyWithoutFavoriteArticlesInput;

  @Field(() => CommentCreateNestedManyWithoutArticleInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutArticleInput;
}
