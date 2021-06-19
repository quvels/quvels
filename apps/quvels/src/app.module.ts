import { AuthClientModule } from '@app/auth-client';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
