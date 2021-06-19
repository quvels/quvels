import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthClientService } from './auth-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE', transport: Transport.TCP
      },
    ]),
  ],
  providers: [AuthClientService],
  exports: [AuthClientService],
})
export class AuthClientModule {}
