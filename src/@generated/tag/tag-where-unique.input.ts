import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';

@InputType()
export class TagWhereUniqueInput {
  @Field(() => String, { nullable: true })
  tagId?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [TagWhereInput], { nullable: true })
  AND?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  OR?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  NOT?: Array<TagWhereInput>;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  articles?: ArticleListRelationFilter;
}
