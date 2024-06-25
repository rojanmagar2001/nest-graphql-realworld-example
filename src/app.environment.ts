import { Env } from '@nestjs-steroids/environment';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, Max, Min } from 'class-validator';

enum NodeEnvironment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class AppEnvironment {
  /**
   * Env decorator mark environment variable that we want to assign
   * (Tip) Without name env Env decorator makes auto UPPER_SNAKE_CASE conversion (e.g. isTest -> IS_TEST)
   */
  @Env('PORT')
  /**
   * Transform is useful for all sorts of transformations or parsing complex values
   * For example: @Transform(value => value.toLowerCase() === 'true')
   */
  @Transform(({ value }) => Number.parseInt(value, 10))
  /**
   * Also, you could use class-validator operators for validation of the correctness of environment variables
   */
  @IsNumber()
  @Min(0)
  @Max(65_535)
  readonly port = 3000;

  @Env('NODE_ENV')
  @IsEnum(NodeEnvironment)
  readonly nodeEnv = NodeEnvironment.Development;

  isDevelopment() {
    return this.nodeEnv === NodeEnvironment.Development;
  }

  @Env('GRAPHQL_ENDPOINT')
  readonly graphqlEndpoint = 'http://localhost:3000/graphql';

  readonly accessTokenExpiresIn = 18 * 3600 * 1000; // 18 hours
  readonly refreshTokenExpiresIn = 30 * 24 * 3600 * 1000; // 30 days

  @Env('JWT_SECRET')
  readonly jwtSecretKey = '';
}
