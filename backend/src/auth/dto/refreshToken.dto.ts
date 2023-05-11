import { IsString } from 'class-validator';

export class RefreshTokenDto {
	@IsString({
		message: 'Token must be a string'
	})
	refreshToken : string
}
