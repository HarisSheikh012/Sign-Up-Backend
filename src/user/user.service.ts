import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  create(body: CreateUserDto) {
    const item = this.userRepository.create(body);
    return this.userRepository.save(item);
  }

  bulkCreate(body: CreateUserDto[]) {
    const items = this.userRepository.create(body);
    return this.userRepository.save(items);
  }

  count() {
    return this.userRepository.count();
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, body: UpdateUserDto) {
    return this.userRepository.update(id, body);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
