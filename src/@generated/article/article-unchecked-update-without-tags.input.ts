import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput } from '../user/user-unchecked-update-many-without-favorite-articles-nested.input';
import { CommentUncheckedUpdateManyWithoutArticleNestedInput } from '../comment/comment-unchecked-update-many-without-article-nested.input';

@InputType()
export class ArticleUncheckedUpdateWithoutTagsInput {
  @Field(() => String, { nullable: true })
  articleId?: string;

  @Field(() => String, { nullable: true })
  slug?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Int, { nullable: true })
  favoritesCount?: number;

  @Field(() => String, { nullable: true })
  authorId?: string;

  @Field(() => UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput, {
    nullable: true,
  })
  favoritedBy?: UserUncheckedUpdateManyWithoutFavoriteArticlesNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutArticleNestedInput, {
    nullable: true,
  })
  comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput;
}
