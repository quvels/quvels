import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AuthClientService {
    constructor(
        @Inject('AUTH_SERVICE') private client: ClientProxy,
    ) { }

    healthCheck(): Observable<string> {
        const pattern = { cmd: 'healthCheck' };
        return this.client.send<string>(pattern, {});
    }
}
