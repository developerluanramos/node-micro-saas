import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';

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

    async store(user: User) {
        return this.prismaService.user.create({
            data: user as any
        });
    }

    async delete(id: Number) {
        return this.prismaService.user.delete({
            where: {
                id: id as any
            }
        });
    }
}
