import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFollowersInput } from './user-unchecked-create-nested-many-without-followers.input';
import { UserUncheckedCreateNestedManyWithoutFollowingInput } from './user-unchecked-create-nested-many-without-following.input';
import { ArticleUncheckedCreateNestedManyWithoutFavoritedByInput } from '../article/article-unchecked-create-nested-many-without-favorited-by.input';
import { ArticleUncheckedCreateNestedManyWithoutAuthorInput } from '../article/article-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
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

  @Field(() => UserUncheckedCreateNestedManyWithoutFollowersInput, {
    nullable: true,
  })
  following?: UserUncheckedCreateNestedManyWithoutFollowersInput;

  @Field(() => UserUncheckedCreateNestedManyWithoutFollowingInput, {
    nullable: true,
  })
  followers?: UserUncheckedCreateNestedManyWithoutFollowingInput;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutFavoritedByInput, {
    nullable: true,
  })
  favoriteArticles?: ArticleUncheckedCreateNestedManyWithoutFavoritedByInput;

  @Field(() => ArticleUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput;
}
