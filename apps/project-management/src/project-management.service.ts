import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
