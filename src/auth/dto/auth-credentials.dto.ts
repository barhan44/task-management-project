import { IsString, MinLength, MaxLength, Matches, IsOptional } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @IsOptional()
    @MinLength(1)
    @MaxLength(100)
    firstName: string;

    @IsString()
    @IsOptional()
    @MinLength(1)
    @MaxLength(100)
    lastName: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'Password too weak' })
    password: string;
}
