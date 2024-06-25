import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TagMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  tagId?: true;

  @Field(() => Boolean, { nullable: true })
  name?: true;
}
