import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateManyWithoutTagsNestedInput } from '../article/article-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => ArticleUpdateManyWithoutTagsNestedInput, { nullable: true })
  articles?: ArticleUpdateManyWithoutTagsNestedInput;
}
