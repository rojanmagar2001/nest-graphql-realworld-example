import { PrismaClient } from '@prisma/client';
import { PrismaRepository } from './prisma.repository';

const prismaRepositories = new Set<PrismaDelegateNames>();

export function createRepositoryProviders() {
  return [...prismaRepositories].map((name) => {
    return {
      provide: `${name}PrismaRepository`,
      inject: [PrismaRepository],
      useFactory: (prisma: PrismaRepository) => prisma[name],
    };
  });
}

type TestDelegate = { findMany: (args: any) => any };
type PrismaDelegateNames = keyof {
  [P in keyof PrismaClient as PrismaClient[P] extends TestDelegate
    ? P
    : never]: PrismaClient[P];
};
