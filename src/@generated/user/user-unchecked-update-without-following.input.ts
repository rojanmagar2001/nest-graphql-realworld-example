import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedUpdateManyWithoutFollowingNestedInput } from './user-unchecked-update-many-without-following-nested.input';
import { ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput } from '../article/article-unchecked-update-many-without-favorited-by-nested.input';
import { ArticleUncheckedUpdateManyWithoutAuthorNestedInput } from '../article/article-unchecked-update-many-without-author-nested.input';
import { CommentUncheckedUpdateManyWithoutAuthorNestedInput } from '../comment/comment-unchecked-update-many-without-author-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutFollowingInput {
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

  @Field(() => UserUncheckedUpdateManyWithoutFollowingNestedInput, {
    nullable: true,
  })
  followers?: UserUncheckedUpdateManyWithoutFollowingNestedInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput, {
    nullable: true,
  })
  favoriteArticles?: ArticleUncheckedUpdateManyWithoutFavoritedByNestedInput;

  @Field(() => ArticleUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput;

  @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {
    nullable: true,
  })
  comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
}
