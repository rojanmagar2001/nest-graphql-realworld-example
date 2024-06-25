import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Tag } from '../tag/tag.model';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { ArticleCount } from './article-count.output';

@ObjectType()
export class Article {
  @Field(() => ID, { nullable: false })
  articleId!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  favoritesCount!: number;

  @Field(() => String, { nullable: true })
  authorId!: string | null;

  @Field(() => [Tag], { nullable: true })
  tags?: Array<Tag>;

  @Field(() => User, { nullable: true })
  author?: User | null;

  @Field(() => [User], { nullable: true })
  favoritedBy?: Array<User>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => ArticleCount, { nullable: false })
  _count?: ArticleCount;
}
