import { Controller, Get } from '@nestjs/common';
import { ProjectManagementService } from './project-management.service';

@Controller()
export class ProjectManagementController {
  constructor(private readonly projectManagementService: ProjectManagementService) {}

  @Get()
  getHello(): string {
    return this.projectManagementService.getHello();
  }
}
