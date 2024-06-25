import { DynamicModule, Module } from '@nestjs/common';
import {
  PRISMA_OPTIONS,
  PrismaModuleOptions,
  defaultPrismaOptions,
} from './prisma.providers';
import { createRepositoryProviders } from './inject-repository.decorator';
import { PrismaRepository } from './prisma.repository';

@Module({})
export class PrismaModule {
  static register(options: PrismaModuleOptions): DynamicModule {
    const repositoryProviders = createRepositoryProviders();
    options = { ...defaultPrismaOptions, ...options };

    return {
      global: true,
      module: PrismaModule,
      providers: [
        {
          provide: PRISMA_OPTIONS,
          useValue: options,
        },
        PrismaRepository,
        ...repositoryProviders,
      ],
      exports: [...repositoryProviders, PrismaRepository],
    };
  }
}
