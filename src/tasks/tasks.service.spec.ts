import { Test } from '@nestjs/testing';
import { TasksModule } from './tasks.module';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

const mockTasksRepository = () => ({});

describe('TasksService', () => {
  let tasksService: TasksService;
  let TasksRepository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksModule,
        // { provide: TasksRepository,
        // useFactory: mockTasksRepository }
      ],
    });
  });
});
