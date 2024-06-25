import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';

@InputType()
export class CommentOrderByWithRelationInput {
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

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  author?: UserOrderByWithRelationInput;

  @Field(() => ArticleOrderByWithRelationInput, { nullable: true })
  article?: ArticleOrderByWithRelationInput;
}
