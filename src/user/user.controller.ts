import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Controller('user')
export class UserController {

    constructor(private userRepository: UserRepository) { }

    @Get()
    async all() {
        return this.userRepository.all()
    }

    @Post()
    async store(@Body() user: User) {
        const newUser = this.userRepository.store(user)
        return newUser
    }

    @Get(':id')
    async show(@Param('id') id: string) {
        const user = await this.userRepository.oneById(+id)
        return user
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.userRepository.delete(+id)
    }
}