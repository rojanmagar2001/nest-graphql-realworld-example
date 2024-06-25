import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateManyWithoutFollowersNestedInput } from './user-update-many-without-followers-nested.input';
import { ArticleUpdateManyWithoutFavoritedByNestedInput } from '../article/article-update-many-without-favorited-by-nested.input';
import { ArticleUpdateManyWithoutAuthorNestedInput } from '../article/article-update-many-without-author-nested.input';
import { CommentUpdateManyWithoutAuthorNestedInput } from '../comment/comment-update-many-without-author-nested.input';

@InputType()
export class UserUpdateWithoutFollowersInput {
  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => UserUpdateManyWithoutFollowersNestedInput, { nullable: true })
  following?: UserUpdateManyWithoutFollowersNestedInput;

  @Field(() => ArticleUpdateManyWithoutFavoritedByNestedInput, {
    nullable: true,
  })
  favoriteArticles?: ArticleUpdateManyWithoutFavoritedByNestedInput;

  @Field(() => ArticleUpdateManyWithoutAuthorNestedInput, { nullable: true })
  articles?: ArticleUpdateManyWithoutAuthorNestedInput;

  @Field(() => CommentUpdateManyWithoutAuthorNestedInput, { nullable: true })
  comments?: CommentUpdateManyWithoutAuthorNestedInput;
}
