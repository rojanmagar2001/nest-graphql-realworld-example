import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TagMaxAggregate {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: true })
  name?: string;
}
