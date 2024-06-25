import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentsNestedInput } from '../user/user-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutArticleInput {
  @Field(() => String, { nullable: true })
  commentId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {
    nullable: true,
  })
  author?: UserUpdateOneRequiredWithoutCommentsNestedInput;
}
