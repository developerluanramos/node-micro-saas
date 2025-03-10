import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';

type AuthInput = { username: string; password: string };
type SignInData = { userId: number; username: string };
type AuthResult = { accessToken: string; userId: number; username: string };

@Injectable()
export class AuthService {

    constructor(private userRepository: UserRepository) {}

    async authenticate(authUser: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(authUser);

        if(!user) {
            throw new UnauthorizedException();
        }

        return {
            accessToken: 'fake-token',
            userId: user.userId,
            username: user.username
        }
    }

    async validateUser(authUser: AuthInput): Promise<SignInData | null> {
        return null
    }
}
