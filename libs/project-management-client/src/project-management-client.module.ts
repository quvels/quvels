import { Module } from '@nestjs/common';
import { ProjectManagementClientService } from './project-management-client.service';

@Module({
  providers: [ProjectManagementClientService],
  exports: [ProjectManagementClientService],
})
export class ProjectManagementClientModule {}
