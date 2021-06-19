import { Test, TestingModule } from '@nestjs/testing';
import { AuthClientService } from './auth-client.service';

describe('AuthClientService', () => {
  let service: AuthClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthClientService],
    }).compile();

    service = module.get<AuthClientService>(AuthClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
