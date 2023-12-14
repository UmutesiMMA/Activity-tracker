import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { generalRepo } from 'src/generalRepo.repository';

describe('CategoriesService', () => {
  let service: CategoriesService;
  beforeEach(async () => {
    const fakeGeneralRepo = {
      find: () => Promise.resolve({}),
      create: (name: string) => Promise.resolve({ id: '89-ui-3', name }),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: generalRepo,
          useValue: fakeGeneralRepo,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
