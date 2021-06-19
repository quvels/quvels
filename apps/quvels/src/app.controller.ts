import { AuthClientService } from '@app/auth-client';
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authClientService: AuthClientService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('authHealthCheck')
  authHealthCheck(): Observable<string> {
    return this.authClientService.healthCheck();
  }
}
