import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';
import { StoreDto } from './dto/store.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) {}

    async all() {
        return this.prismaService.user.findMany();
    }

    async oneById(id: Number) {
        return this.prismaService.user.findUniqueOrThrow({
            where: {
                id: id as any
            }
        });
    }

    async store(storeUserDto: StoreDto) {
        return this.prismaService.user.create({
            data: storeUserDto as any
        });
    }

    async delete(id: Number) {
        return this.prismaService.user.delete({
            where: {
                id: id as any
            }
        });
    }

    async update(id: Number, updateUserDto: UpdateDto) {
        return this.prismaService.user.update({
            where: {
                id: id as any
            },
            data: updateUserDto as any
        });
    }
}
