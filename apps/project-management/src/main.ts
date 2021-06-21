import { NestFactory } from '@nestjs/core';
import { ProjectManagementModule } from './project-management.module';

async function bootstrap() {
  const app = await NestFactory.create(ProjectManagementModule);
  await app.listen(3000);
}
bootstrap();
