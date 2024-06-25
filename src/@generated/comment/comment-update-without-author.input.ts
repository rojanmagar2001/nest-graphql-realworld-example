import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateOneWithoutCommentsNestedInput } from '../article/article-update-one-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  commentId?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  body?: string;

  @Field(() => ArticleUpdateOneWithoutCommentsNestedInput, { nullable: true })
  article?: ArticleUpdateOneWithoutCommentsNestedInput;
}
