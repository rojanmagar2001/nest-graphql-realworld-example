import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagUpdateManyWithoutArticlesNestedInput } from '../tag/tag-update-many-without-articles-nested.input';
import { UserUpdateOneWithoutArticlesNestedInput } from '../user/user-update-one-without-articles-nested.input';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input';

@InputType()
export class ArticleUpdateWithoutFavoritedByInput {
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

  @Field(() => TagUpdateManyWithoutArticlesNestedInput, { nullable: true })
  tags?: TagUpdateManyWithoutArticlesNestedInput;

  @Field(() => UserUpdateOneWithoutArticlesNestedInput, { nullable: true })
  author?: UserUpdateOneWithoutArticlesNestedInput;

  @Field(() => CommentUpdateManyWithoutArticleNestedInput, { nullable: true })
  comments?: CommentUpdateManyWithoutArticleNestedInput;
}
