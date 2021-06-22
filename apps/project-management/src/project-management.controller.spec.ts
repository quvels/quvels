import { Test, TestingModule } from '@nestjs/testing';
import { ProjectManagementController } from './project-management.controller';
import { ProjectManagementService } from './project-management.service';

describe('ProjectManagementController', () => {
  let projectManagementController: ProjectManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProjectManagementController],
      providers: [ProjectManagementService],
    }).compile();

    projectManagementController = app.get<ProjectManagementController>(ProjectManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(projectManagementController.getHello()).toBe('Hello World!');
    });
  });
});
