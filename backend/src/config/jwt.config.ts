import {ConfigService} from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getMongoConfig = async (configService: ConfigService):Promise<JwtModuleOptions> => ({
	secret: configService.get('JWT_SECRET')
})