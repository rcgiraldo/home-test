import { Test, TestingModule } from '@nestjs/testing';
import { CommitsService } from './commits.service';


describe('CommitsService', () => {
  let service: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitsService],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
	it('should return an array of commits', async () => {
		const commits = await service.findAll();
		expect(Array.isArray(commits)).toBe(true);
	})
  });

  describe('findOne', () => {
	it('should get a single commit', async() => {
		const commit = await service.findOne("6d93f34b14fb732965f227b88a955750b4379ff3");
		expect(commit.author.date).toEqual("2023-04-29T11:56:27Z");

	})
  })

});
