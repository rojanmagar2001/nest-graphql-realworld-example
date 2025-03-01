import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {
  @Field(() => String, { nullable: true })
  commentId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => UserCreateNestedOneWithoutCommentsInput, { nullable: false })
  author!: UserCreateNestedOneWithoutCommentsInput;

  @Field(() => ArticleCreateNestedOneWithoutCommentsInput, { nullable: true })
  article?: ArticleCreateNestedOneWithoutCommentsInput;
}
