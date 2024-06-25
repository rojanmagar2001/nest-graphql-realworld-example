import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TagUncheckedCreateWithoutArticlesInput {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: false })
  name!: string;
}
