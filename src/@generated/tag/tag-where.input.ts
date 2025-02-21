import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';

@InputType()
export class TagWhereInput {
  @Field(() => [TagWhereInput], { nullable: true })
  AND?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  OR?: Array<TagWhereInput>;

  @Field(() => [TagWhereInput], { nullable: true })
  NOT?: Array<TagWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  tagId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => ArticleListRelationFilter, { nullable: true })
  articles?: ArticleListRelationFilter;
}
