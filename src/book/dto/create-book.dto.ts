/* eslint-disable prettier/prettier */
import { Category } from '../schemas/book.schema';
import { IsEnum, IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class CreateBookDto
{
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string

    @IsNotEmpty()
    @IsNumber()
    readonly price: number

    @IsNotEmpty()
    @IsEnum(Category, {message: 'Please enter correct category'})
    readonly category: Category;


}
/*{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category; 

}*/