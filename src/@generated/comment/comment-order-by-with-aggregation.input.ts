import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { CommentCountOrderByAggregateInput } from './comment-count-order-by-aggregate.input';
import { CommentMaxOrderByAggregateInput } from './comment-max-order-by-aggregate.input';
import { CommentMinOrderByAggregateInput } from './comment-min-order-by-aggregate.input';

@InputType()
export class CommentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  commentId?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  body?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  articleId?: SortOrderInput;

  @Field(() => CommentCountOrderByAggregateInput, { nullable: true })
  _count?: CommentCountOrderByAggregateInput;

  @Field(() => CommentMaxOrderByAggregateInput, { nullable: true })
  _max?: CommentMaxOrderByAggregateInput;

  @Field(() => CommentMinOrderByAggregateInput, { nullable: true })
  _min?: CommentMinOrderByAggregateInput;
}
