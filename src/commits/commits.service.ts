import { Injectable } from '@nestjs/common';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CommitsService {

	constructor(private readonly httpService: HttpService) {}

  create(createCommitDto: CreateCommitDto) {
    return 'This action adds a new commit';
  }

  public async findAll() {

		let url = "https://api.github.com/repos/rcgiraldo/home-test/commits"

		try{
			const response = await firstValueFrom(
				this.httpService.get(url)
			)
			return response.data
		}
		catch(error){
			throw error;

		}
	
    
  }

  findOne(id: number) {
    return `This action returns a #${id} commit`;
  }

  update(id: number, updateCommitDto: UpdateCommitDto) {
    return `This action updates a #${id} commit`;
  }

  remove(id: number) {
    return `This action removes a #${id} commit`;
  }
}
