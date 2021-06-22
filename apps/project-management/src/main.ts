import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProjectManagementModule } from './project-management.module';

async function bootstrap() {

  const app = await NestFactory.create(ProjectManagementModule);
  const microservice = app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3003
    }
  });

  const config = new DocumentBuilder()
    .setTitle('Project management microservice')
    .setDescription('Project managemen API description')
    .setVersion('1.0')
    .addTag('project-management')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservicesAsync();
  await app.listen(3004);
}
bootstrap();
