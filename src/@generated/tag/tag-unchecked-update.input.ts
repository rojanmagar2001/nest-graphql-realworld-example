import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUncheckedUpdateManyWithoutTagsNestedInput } from '../article/article-unchecked-update-many-without-tags-nested.input';

@InputType()
export class TagUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => ArticleUncheckedUpdateManyWithoutTagsNestedInput, {
    nullable: true,
  })
  articles?: ArticleUncheckedUpdateManyWithoutTagsNestedInput;
}
