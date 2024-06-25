import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagMinAggregate {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}
