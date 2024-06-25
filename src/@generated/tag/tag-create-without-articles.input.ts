import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TagCreateWithoutArticlesInput {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: false })
  name!: string;
}
