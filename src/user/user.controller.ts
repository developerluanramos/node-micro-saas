import { Body, Controller, Get, Post } from '@nestjs/common';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {

    constructor(private userRepository: UserRepository) {

    }

    @Get()
    async create() {
        return 'Enable to create user'
    }

    @Post()
    async store(@Body() user: User) {
        const newUser = this.userRepository.store(user);
        return newUser
    }
}
