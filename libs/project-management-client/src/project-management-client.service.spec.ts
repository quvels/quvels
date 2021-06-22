import { Test, TestingModule } from '@nestjs/testing';
import { ProjectManagementClientService } from './project-management-client.service';

describe('ProjectManagementClientService', () => {
  let service: ProjectManagementClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectManagementClientService],
    }).compile();

    service = module.get<ProjectManagementClientService>(ProjectManagementClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
