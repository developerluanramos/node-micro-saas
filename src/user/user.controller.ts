import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import User from './user.entity';
import { UserRepository } from './user.repository';
import { StoreDto } from './dto/store.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('user')
export class UserController {

    constructor(private userRepository: UserRepository) { }

    @Get()
    async all() {
        return this.userRepository.all()
    }

    @Post()
    async store(@Body() storeUserDto: StoreDto) {
        const newUser = this.userRepository.store(storeUserDto)
        return newUser
    }

    @Get(':id')
    async show(@Param('id') id: string) {
        const user = await this.userRepository.oneById(+id)
        return user
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.userRepository.delete(+id)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateDto) {
        await this.userRepository.update(+id, updateUserDto);
    }
}