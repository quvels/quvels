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
      port: 3001
    }
  });

  const config = new DocumentBuilder()
    .setTitle('Auth microservice')
    .setDescription('The auth API description')
    .setVersion('1.0')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.startAllMicroservicesAsync();
  await app.listen(3003);
}
bootstrap();
