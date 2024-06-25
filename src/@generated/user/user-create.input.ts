import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutFollowersInput } from './user-create-nested-many-without-followers.input';
import { UserCreateNestedManyWithoutFollowingInput } from './user-create-nested-many-without-following.input';
import { ArticleCreateNestedManyWithoutFavoritedByInput } from '../article/article-create-nested-many-without-favorited-by.input';
import { ArticleCreateNestedManyWithoutAuthorInput } from '../article/article-create-nested-many-without-author.input';
import { CommentCreateNestedManyWithoutAuthorInput } from '../comment/comment-create-nested-many-without-author.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => UserCreateNestedManyWithoutFollowersInput, { nullable: true })
  following?: UserCreateNestedManyWithoutFollowersInput;

  @Field(() => UserCreateNestedManyWithoutFollowingInput, { nullable: true })
  followers?: UserCreateNestedManyWithoutFollowingInput;

  @Field(() => ArticleCreateNestedManyWithoutFavoritedByInput, {
    nullable: true,
  })
  favoriteArticles?: ArticleCreateNestedManyWithoutFavoritedByInput;

  @Field(() => ArticleCreateNestedManyWithoutAuthorInput, { nullable: true })
  articles?: ArticleCreateNestedManyWithoutAuthorInput;

  @Field(() => CommentCreateNestedManyWithoutAuthorInput, { nullable: true })
  comments?: CommentCreateNestedManyWithoutAuthorInput;
}
