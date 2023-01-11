import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Controller()
export class AppController {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

  @Get()
  getALlUsers() {
    return this.userRepo.find();
  }

  @Post()
  creteUser() {
    const user = new User()
    user.firstName = 'fn'
    user.lastName = 'ln'
    user.isUserActive = false
    return this.userRepo.save(user);
  }
}
