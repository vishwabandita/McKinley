/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async signUp(signUpDto: SignUpDto): Promise<{token: string}>
    {
        const {name, email, password}=signUpDto;

        const hashedPassword=await bcrypt.hash(password, 10);

        const user=await this.userModel.create(
            {
                name,
                email,
                password: hashedPassword,
            }
        );

        const token= this.jwtService.sign({id:user._id});

        return {token};
    }
}
